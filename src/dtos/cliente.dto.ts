import { ApiProperty } from "@nestjs/swagger";

export class ClienteDto {

    @ApiProperty({ description: "Id del cliente"})
    id: number;

    @ApiProperty({ description: "Dirección de correo electrónico del cliente"})
    email: string;
}