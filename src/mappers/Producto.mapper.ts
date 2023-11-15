import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { ProductoDto } from "src/dtos/producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { InventarioDto } from "src/dtos/inventario.dto";

export class ProductoMapper {

    static createProductoDtoToEntity(dto: CreateProductoDto): Producto {
        const entidad = new Producto();
        entidad.nombre = dto.nombre;
        entidad.descripcion = dto.descripcion;
        entidad.idCategoria = dto.idCategoria;
        entidad.idIlustracion = dto.idIlustracion;
        entidad.idMarca = dto.idMarca;
        entidad.idProveedor = dto.idProveedor
        entidad.precio = dto.precio;
        return entidad;
    }

    static productoEntityToDto(entidad: Producto): ProductoDto {
        const dto = new ProductoDto();
        dto.id = entidad.id;
        dto.nombre = entidad.nombre;
        dto.descripcion = entidad.descripcion;
        dto.idCategoria = entidad.idCategoria;
        dto.idIlustracion = entidad.idIlustracion;
        dto.idMarca = entidad.idMarca;
        dto.idProveedor = entidad.idProveedor;
        dto.precio = entidad.precio;

        if(!entidad.inventario) {
            return dto;
        }

        dto.inventario = entidad.inventario.map((inventarioEntidad) => {
            let inventarioDto = new InventarioDto();
            inventarioDto.id = inventarioEntidad.id;
            inventarioDto.talla = inventarioEntidad.talla;
            inventarioDto.cantidad = inventarioEntidad.cantidad;
            return inventarioDto;
        });

        return dto;
    }

    static productoEntitiesToProductoDtoList(entidades: Producto[]): ProductoDto[] {
        return entidades.map((entidad) => this.productoEntityToDto(entidad));
    }
}