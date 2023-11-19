import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MaxLength, IsOptional } from "class-validator";
import { IlustracionDto } from "./ilustracion.dto";
import { ProveedorDto } from "./proveedor.dto";
import { MarcaDto } from "./marca.dto";
import { CategoriaDto } from "./categoria.dto";

export class UpdateProductoDto {
    
    @ApiProperty({ example: "Polera", description: "Nombre del producto" })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    nombre: string;

    @ApiProperty({ example: "Polera de color blanco", description: "Descripción del producto" })
    @IsOptional()
    @IsString()
    @MaxLength(1000)
    descripcion: string;

    @ApiProperty({ example: "10000", description: "Precio del producto" })
    @IsOptional()
    @IsInt()
    precio: number;

    @ApiProperty({ description: "Id de la categoría del producto", type: CategoriaDto })
    @IsOptional()
    categoria: CategoriaDto;

    @ApiProperty({ description: "Marca del producto", type: MarcaDto })
    @IsOptional()
    marca: MarcaDto;

    @ApiProperty({ description: "Ilustración del producto", type: IlustracionDto })
    @IsOptional()
    ilustracion: IlustracionDto;

    @ApiProperty({ description: "Proveedor del producto", type: ProveedorDto})
    @IsOptional()
    proveedor: ProveedorDto;
}