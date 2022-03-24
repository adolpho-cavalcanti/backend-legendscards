import { IsEmail, IsMobilePhone, IsString, Matches } from "class-validator";

export class AuthLoginDto {
    
    @IsEmail()
    email: string;
    
    /**
     * Min 8 caracteres
     * uma letra minúscula
     * uma letra maiúscula
     * um número
     */
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-z\d]{8,}$/, { message: 'Senha inválida' })
    password: string;
    
}