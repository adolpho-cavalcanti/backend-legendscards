import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt'
import { AwsCognitoConfig } from 'src/aws/aws-cognito.config';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    private logger = new Logger(JwtStrategy.name);

    constructor(
        private awsCognitoConfig: AwsCognitoConfig
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            audience: awsCognitoConfig.clientId,
            issuer: awsCognitoConfig.authority,
            algorithms: ['RS256'],
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${awsCognitoConfig.authority}/.well-known/jwks.json`
            })
        })
    }

    public async validate(payload: any) {
        this.logger.log(payload);
        return {
            idUser: payload.sub, email: payload.email
        }
    }
}