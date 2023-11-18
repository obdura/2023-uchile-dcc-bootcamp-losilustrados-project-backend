import { ApiProperty } from "@nestjs/swagger";
import { Inventario } from "src/entidades/inventario.entity";
import { InventarioDto } from "./inventario.dto";
import { Categoria } from "src/entidades/categoria.entity";
import { Ilustracion } from "src/entidades/ilustracion.entity";
import { Marca } from "src/entidades/marca.entity";
import { Proveedor } from "src/entidades/proveedores.entity";

export class ProductoDto {

    @ApiProperty({ description: "Id del producto" })
    id: number;

    @ApiProperty({ description: "Nombre del producto" })
    nombre: string;

    @ApiProperty({ description: "Descripcion del producto" })
    descripcion: string;
    
    @ApiProperty({ description: "Categoría del producto", type: Categoria })
    categoria: Categoria;
    
    @ApiProperty({ description: "Ilustración del producto", type: Ilustracion })
    ilustracion: Ilustracion;
    
    @ApiProperty({ description: "La marca del producto", type: Marca })
    marca: Marca;
    
    @ApiProperty({ description: "Proveedor del producto", type: Proveedor })
    proveedor: Proveedor;
    
    @ApiProperty({ description: "Precio del producto" })
    precio: number;

    @ApiProperty({ description: "Inventario del producto", type: Inventario, isArray: true })
    inventarios: InventarioDto[];
}