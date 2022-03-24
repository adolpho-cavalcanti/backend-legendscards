import { Body, Controller, Post } from '@nestjs/common';
import { AwsCognitoService } from '../aws/aws.cognito.service';
import { AuthRegisterDto } from './dtos/auth-register-user.dto';
import { AuthLoginDto } from './dtos/auth-login-user.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private awsCognitoService: AwsCognitoService
    ) {}

    @Post('/register')
    async register(
        @Body() authRegisterDto: AuthRegisterDto
    ) {
        return await this.awsCognitoService.registerUser(authRegisterDto);
    }

    @Post('/login')
    async login(
        @Body() authLoginDto: AuthLoginDto
    ) {
        return await this.awsCognitoService.loginUser(authLoginDto);
    }
}
