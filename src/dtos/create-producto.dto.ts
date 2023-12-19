import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, MaxLength } from "class-validator";
import { Categoria } from "src/entidades/categoria.entity";
import { Ilustracion } from "src/entidades/ilustracion.entity";
import { Marca } from "src/entidades/marca.entity";
import { Proveedor } from "src/entidades/proveedores.entity";

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

    @ApiProperty({ example: "Poleras", description: "Id de la categoría del producto"})
    // categoria: Categoria;
    categoria: string;

    @ApiProperty({ example: "Adidas", description: "Id de la marca del producto"})
    // marca: Marca;
    marca: string;

    // @ApiProperty({ example: "1", description: "Id de la ilustración del producto"})
    // ilustracion: Ilustracion;

    @ApiProperty({ example: "Adidas S.A.", description: "Id del proveedor del producto"})
    // proveedor: Proveedor;
    proveedor: string;

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
    precioNormal: string;

    @ApiProperty({ description: "Indica si el precio oferta del producto" })
    precioOferta: string;

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

    // @ApiProperty()
    // thumbnail: string;
}