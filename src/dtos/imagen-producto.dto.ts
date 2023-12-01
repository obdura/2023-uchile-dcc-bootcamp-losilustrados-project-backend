import { ApiProperty } from "@nestjs/swagger";

export class ImagenProductoDto {

    @ApiProperty({ description: "Base 64 de la imagen" })
    base64: string;

    @ApiProperty({ description: "Ruta del archivo" })
    ruta: string;    
}