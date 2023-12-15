import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {

    @ApiProperty({description: "Username del cliente"})
    username: string;

    @ApiProperty({description: "Password del cliente"})
    password: string;
}