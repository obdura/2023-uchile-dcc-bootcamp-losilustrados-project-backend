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

    @ApiProperty({ description: "Id de la categoría del producto", type: String })
    @IsOptional()
    nombreCategoria: string;

    @ApiProperty({ description: "Marca del producto", type: String })
    @IsOptional()
    nombreMarca: string;

    // @ApiProperty({ description: "Ilustración del producto", type: IlustracionDto })
    // @IsOptional()
    // ilustracion: IlustracionDto;

    @ApiProperty({ description: "Proveedor del producto", type: String})
    @IsOptional()
    nombreProveedor: string;
    
    @ApiProperty({ description: "Imagen 1 del producto" })
    img1base64: string;

    @ApiProperty({ description: "Imagen 2 del producto" })
    img2base64: string;

    @ApiProperty({ description: "Imagen 3 del producto" })
    img3base64: string;

    @ApiProperty({ description: "Indica si el producto es favorito" })
    esFavorito: boolean;
    
    @ApiProperty({ description: "Indica si el producto es oferta" })
    esOferta: boolean;

    @ApiProperty({ description: "Talla del producto" })
    talla: string;

    @ApiProperty({ description: "Precio normal del producto" })
    precioNormal: number;

    @ApiProperty({ description: "Indica si el precio oferta del producto" })
    precioOferta: number;

    @ApiProperty()
    condicion: string;

    @ApiProperty()
    material: string;

    @ApiProperty()
    medidaCadera: number;

    @ApiProperty()
    medidaPecho: number;

    @ApiProperty()
    medidaLargo: number;

    @ApiProperty()
    ilustradorId: number;

}