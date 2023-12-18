import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { ProductoDto } from "src/dtos/producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { InventarioDto } from "src/dtos/inventario.dto";
import { CategoriaMapper } from "./categoria.mapper";
import { IlustracionMapper } from "./ilustracion.mapper";
import { MarcaMapper } from "./marca.mapper";
import { ProveedorMapper } from "./proveedor.mapper";
import { ImagenProductoDto } from "src/dtos/imagen-producto.dto";
import { promises as FS } from 'fs';

export class ProductoMapper {

    static createProductoDtoToEntity(dto: CreateProductoDto): Producto {
        const entidad = new Producto();
        entidad.nombre = dto.nombre;
        entidad.descripcion = dto.descripcion;
        // entidad.categoria = dto.categoria;
        // entidad.ilustracion = dto.ilustracion;
        // entidad.marca = dto.marca;
        // entidad.proveedor = dto.proveedor
        entidad.precio = dto.precio;
        entidad.nombreCategoria = dto.categoria;
        entidad.nombreMarca = dto.marca;
        entidad.nombreProveedor = dto.proveedor;
        
        return entidad;
    }

    static async entityToDto(entidad: Producto): Promise<ProductoDto> {
        const dto = new ProductoDto();
        dto.id = entidad.id;
        dto.nombre = entidad.nombre;
        dto.descripcion = entidad.descripcion;
        dto.precio = entidad.precio;

        dto.categoria = entidad.nombreCategoria;
        dto.marca = entidad.nombreMarca;
        dto.proveedor = entidad.nombreProveedor;

        if(entidad.imagenes) {
            try {
                dto.imagen1ruta = entidad.imagenes[0].ruta;
                dto.imagen2ruta = entidad.imagenes[1].ruta;
                dto.imagen3ruta = entidad.imagenes[2].ruta;
            } catch(error) {
                console.log(error);
            }
        }

        // if(entidad.categoria) {
        //     dto.categoria = CategoriaMapper.entityToDto(entidad.categoria);
        // }

        // if(entidad.ilustracion) {
        //     dto.ilustracion = IlustracionMapper.entityToDto(entidad.ilustracion);
        // }

        // if(entidad.marca) {
        //     dto.marca = MarcaMapper.entityToDto(entidad.marca);
        // }

        // if(entidad.proveedor) {
        //     dto.proveedor = ProveedorMapper.entityToDto(entidad.proveedor);
        // }

        // if(!entidad.inventarios) {
        //     return dto;
        // }

        // dto.inventarios = entidad.inventarios.map((inventarioEntidad) => {
        //     let inventarioDto = new InventarioDto();
        //     inventarioDto.id = inventarioEntidad.id;
        //     inventarioDto.talla = inventarioEntidad.talla;
        //     inventarioDto.cantidad = inventarioEntidad.cantidad;
        //     return inventarioDto;
        // });

        // if(!entidad.imagenes) {
        //     return dto;
        // }

        // dto.imagenes = await Promise.all(entidad.imagenes.map( async (imagenEntidad) => {
        //     let imagenDto = new ImagenProductoDto();
        //     const ruta = imagenEntidad.ruta;
        //     let buffer = await FS.readFile(ruta);
        //     imagenDto.base64 = buffer.toString();
        //     imagenDto.ruta = imagenEntidad.ruta;
        //     return imagenDto;
        // }));
        console.log(dto);
        return dto;
    }

    static async productoEntitiesToProductoDtoList(entidades: Producto[]): Promise<ProductoDto[]> {
        console.log(entidades);
        return Promise.all(entidades.map((entidad) => this.entityToDto(entidad)));
    }
}
