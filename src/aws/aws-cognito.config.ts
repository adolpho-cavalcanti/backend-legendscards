import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsCognitoConfig {
    constructor(
        private configService: ConfigService
    ) {}

    public userPoolId = this.configService.get<string>('COGNITO_USER_POOL_ID');
    public clientId = this.configService.get<string>('COGNITO_CLIENT_ID');
    public region = this.configService.get<string>('AWS_REGION_US_VIRGINIA');
    // public authority = `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
    public authority = 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_oUSdpvICF';
}