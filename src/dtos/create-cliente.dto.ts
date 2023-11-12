import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateClienteDto {

    @ApiProperty({ example: "cliente@email.com", description: "Dirección de correo electrónico del cliente"})
    @IsString()
    @MaxLength(255)
    email: string;

    @ApiProperty({ example: "password123", description: "Contraseña de la cuenta." })
    @IsString()
    @MaxLength(255)
    password: string;
}