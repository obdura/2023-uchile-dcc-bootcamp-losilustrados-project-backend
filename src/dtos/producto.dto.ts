import { ApiProperty } from "@nestjs/swagger";
import { Inventario } from "src/entidades/inventario.entity";
import { InventarioDto } from "./inventario.dto";

export class ProductoDto {

    @ApiProperty({ description: "Id del producto" })
    id: number;

    @ApiProperty({ description: "Nombre del producto" })
    nombre: string;

    @ApiProperty({ description: "Descripcion del producto" })
    descripcion: string;
    
    @ApiProperty({ description: "Id de la categoría del producto" })
    idCategoria: number;
    
    @ApiProperty({ description: "Id de la ilustración del producto" })
    idIlustracion: number;
    
    @ApiProperty({ description: "Id de la marca del producto" })
    idMarca: number;
    
    @ApiProperty({ description: "Id del proveedor del producto" })
    idProveedor: number;
    
    @ApiProperty({ description: "Precio del producto" })
    precio: number;

    @ApiProperty({ description: "Inventario del producto" })
    inventario: InventarioDto[];
}