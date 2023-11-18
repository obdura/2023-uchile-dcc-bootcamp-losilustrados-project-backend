import { ApiProperty } from "@nestjs/swagger";
import { Inventario } from "src/entidades/inventario.entity";
import { InventarioDto } from "./inventario.dto";
import { CategoriaDto } from "./categoria.dto";
import { IlustracionDto } from "./ilustracion.dto";
import { MarcaDto } from "./marca.dto";
import { ProveedorDto } from "./proveedor.dto";

export class ProductoDto {

    @ApiProperty({ description: "Id del producto" })
    id: number;

    @ApiProperty({ description: "Nombre del producto" })
    nombre: string;

    @ApiProperty({ description: "Descripcion del producto" })
    descripcion: string;
    
    @ApiProperty({ description: "Categoría del producto", type: CategoriaDto })
    categoria: CategoriaDto;
    
    @ApiProperty({ description: "Ilustración del producto", type: IlustracionDto })
    ilustracion: IlustracionDto;
    
    @ApiProperty({ description: "La marca del producto", type: MarcaDto })
    marca: MarcaDto;
    
    @ApiProperty({ description: "Proveedor del producto", type: ProveedorDto })
    proveedor: ProveedorDto;
    
    @ApiProperty({ description: "Precio del producto" })
    precio: number;

    @ApiProperty({ description: "Inventario del producto", type: Inventario, isArray: true })
    inventarios: InventarioDto[];
}