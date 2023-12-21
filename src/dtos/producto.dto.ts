import { ApiProperty } from "@nestjs/swagger";
import { Inventario } from "src/entidades/inventario.entity";
import { InventarioDto } from "./inventario.dto";
import { CategoriaDto } from "./categoria.dto";
import { IlustracionDto } from "./ilustracion.dto";
import { MarcaDto } from "./marca.dto";
import { ProveedorDto } from "./proveedor.dto";
import { ImagenProductoDto } from "./imagen-producto.dto";

export class ProductoDto {

    @ApiProperty({ description: "Id del producto" })
    id: number;

    @ApiProperty({ description: "Nombre del producto" })
    nombre: string;

    @ApiProperty({ description: "Descripcion del producto" })
    descripcion: string;
    
    // @ApiProperty({ description: "Categoría del producto", type: CategoriaDto })
    // categoria: CategoriaDto;
    
    // @ApiProperty({ description: "Ilustración del producto", type: IlustracionDto })
    // ilustracion: IlustracionDto;
    
    // @ApiProperty({ description: "La marca del producto", type: MarcaDto })
    // marca: MarcaDto;
    
    // @ApiProperty({ description: "Proveedor del producto", type: ProveedorDto })
    // proveedor: ProveedorDto;
    
    @ApiProperty({ description: "Nombre de la categoría del producto", type: String})
    categoria: string;

    @ApiProperty({ description: "Nombre de la marca del producto", type: String})
    marca: string;

    @ApiProperty({ description: "Nombre del proveedor del producto", type: String })
    proveedor: string;

    @ApiProperty({ description: "Precio del producto" })
    precio: number;

    @ApiProperty({ description: "Imagen 1 del producto" })
    img1: string

    @ApiProperty({ description: "Imagen 2 del producto" })
    img2: string
    
    @ApiProperty({ description: "Imagen 3 del producto" })
    img3: string
    // @ApiProperty({ description: "Inventario del producto", type: Inventario, isArray: true })
    // inventarios: InventarioDto[];

    // @ApiProperty({ description: "Imagenes del producto", type: ImagenProductoDto, isArray: true })
    // imagenes: ImagenProductoDto[];

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

    @ApiProperty()
    thumbnail: string;
}