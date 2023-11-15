import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, MaxLength } from "class-validator";

export class CreateProductoDto {

    @ApiProperty({ example: "Polera", description: "Nombre del producto"})
    @IsString()
    @MaxLength(100)
    nombre: string;

    @ApiProperty({ example: "Polera de color blanco", description: "Descripción del producto"})
    @IsString()
    @MaxLength(1000)
    descripcion: string;

    @ApiProperty({ example: "10000", description: "Precio del producto"})
    @IsInt()
    precio: number;

    @ApiProperty({ example: "1", description: "Id de la categoría del producto"})
    @IsInt()
    idCategoria: number;

    @ApiProperty({ example: "1", description: "Id de la marca del producto"})
    @IsInt()
    idMarca: number;

    @ApiProperty({ example: "1", description: "Id de la ilustración del producto"})
    @IsInt()
    idIlustracion: number;

    @ApiProperty({ example: "1", description: "Id del proveedor del producto"})
    @IsInt()
    idProveedor: number;
}