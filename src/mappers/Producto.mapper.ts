import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { ProductoDto } from "src/dtos/producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { InventarioDto } from "src/dtos/inventario.dto";
import { CategoriaMapper } from "./categoria.mapper";
import { IlustracionMapper } from "./ilustracion.mapper";
import { MarcaMapper } from "./marca.mapper";
import { ProveedorMapper } from "./proveedor.mapper";

export class ProductoMapper {

    static createProductoDtoToEntity(dto: CreateProductoDto): Producto {
        const entidad = new Producto();
        entidad.nombre = dto.nombre;
        entidad.descripcion = dto.descripcion;
        entidad.categoria = dto.categoria;
        entidad.ilustracion = dto.ilustracion;
        entidad.marca = dto.marca;
        entidad.proveedor = dto.proveedor
        entidad.precio = dto.precio;
        return entidad;
    }

    static entityToDto(entidad: Producto): ProductoDto {
        const dto = new ProductoDto();
        dto.id = entidad.id;
        dto.nombre = entidad.nombre;
        dto.descripcion = entidad.descripcion;
        dto.precio = entidad.precio;

        if(entidad.categoria) {
            dto.categoria = CategoriaMapper.entityToDto(entidad.categoria);
        }

        if(entidad.ilustracion) {
            dto.ilustracion = IlustracionMapper.entityToDto(entidad.ilustracion);
        }

        if(entidad.marca) {
            dto.marca = MarcaMapper.entityToDto(entidad.marca);
        }

        if(entidad.proveedor) {
            dto.proveedor = ProveedorMapper.entityToDto(entidad.proveedor);
        }

        if(!entidad.inventarios) {
            return dto;
        }

        dto.inventarios = entidad.inventarios.map((inventarioEntidad) => {
            let inventarioDto = new InventarioDto();
            inventarioDto.id = inventarioEntidad.id;
            inventarioDto.talla = inventarioEntidad.talla;
            inventarioDto.cantidad = inventarioEntidad.cantidad;
            return inventarioDto;
        });

        return dto;
    }

    static productoEntitiesToProductoDtoList(entidades: Producto[]): ProductoDto[] {
        console.log(entidades);
        return entidades.map((entidad) => this.entityToDto(entidad));
    }
}