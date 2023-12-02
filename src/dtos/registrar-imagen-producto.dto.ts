import { ApiProperty } from "@nestjs/swagger";

export class RegistrarImagenProductoDto {

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    base64: string;

    @ApiProperty()
    idProducto: number;
}