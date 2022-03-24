import { Injectable } from '@nestjs/common';
import { AuthRegisterDto } from 'src/auth/dtos/auth-register-user.dto';
import { CognitoUserPool, 
         CognitoUserAttribute, 
         CognitoUser,
         AuthenticationDetails 
       } from 'amazon-cognito-identity-js';
import { AwsCognitoConfig } from './aws-cognito.config';
import { AuthLoginDto } from 'src/auth/dtos/auth-login-user.dto';

@Injectable()
export class AwsCognitoService {

    private userPool: CognitoUserPool;

    constructor(
        private awsCognitoConfig: AwsCognitoConfig
    ) {
        this.userPool = new CognitoUserPool({
            UserPoolId: this.awsCognitoConfig.userPoolId,
            ClientId: this.awsCognitoConfig.clientId
        })
    }

    async registerUser(authRegisterDto: AuthRegisterDto) {
        const { name, email, password, phone } = authRegisterDto;

        return new Promise((resolve, reject) => {
            this.userPool.signUp(
                email, 
                password,
                [
                    new CognitoUserAttribute({
                        Name: 'phone_number', Value: phone
                    }),
                    new CognitoUserAttribute({
                        Name: 'name', Value: name
                    })
                ],
                null,
                (err, result) => {
                    if(!result) {
                        reject(err);
                    } else {
                        resolve(result.user);
                    }
                }
            )
        });
    }

    async loginUser(authLoginDto: AuthLoginDto) {
        const { email, password } = authLoginDto;

        const userData = {
            Username: email,
            Pool: this.userPool
        }

        const authenticationDetails = new AuthenticationDetails({
            Username: email, 
            Password: password
        })

        const userCognito = new CognitoUser(userData);
        
        return new Promise((resolve, reject) => {

            userCognito.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    resolve(result);
                },
                onFailure: (err) => {
                    reject(err);
                }
            })
        });
    }

}
