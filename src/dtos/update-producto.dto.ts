import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MaxLength, IsOptional } from "class-validator";

export class UpdateProductoDto {
    
    @ApiProperty({ example: "Polera", description: "Nombre del producto"})
    @IsOptional()
    @IsString()
    @MaxLength(100)
    nombre: string;

    @ApiProperty({ example: "Polera de color blanco", description: "Descripción del producto"})
    @IsOptional()
    @IsString()
    @MaxLength(1000)
    descripcion: string;

    @ApiProperty({ example: "10000", description: "Precio del producto"})
    @IsOptional()
    @IsInt()
    precio: number;

    @ApiProperty({ example: "1", description: "Id de la categoría del producto"})
    @IsOptional()
    @IsInt()
    idCategoria: number;

    @ApiProperty({ example: "1", description: "Id de la marca del producto"})
    @IsOptional()
    @IsInt()
    idMarca: number;

    @ApiProperty({ example: "1", description: "Id de la ilustración del producto"})
    @IsOptional()
    @IsInt()
    idIlustracion: number;

    @ApiProperty({ example: "1", description: "Id del proveedor del producto"})
    @IsOptional()
    @IsInt()
    idProveedor: number;
}