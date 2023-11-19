import { RegistroCarritoDto } from "src/dtos/registro-carrito.dto";
import { RegistroCarrito } from "src/entidades/registro-carrito.entity";
import { ProductoMapper } from "./producto.mapper";
import { ClienteMapper } from "./cliente.mapper";

export class RegistroCarritoMapper {

    static entityToDto(entity: RegistroCarrito): RegistroCarritoDto {
        let dto: RegistroCarritoDto = new RegistroCarritoDto();
        dto.id = entity.id;
        dto.cantidad = entity.cantidad;
        dto.talla = entity.talla;

        if(entity.cliente) {
            dto.cliente = ClienteMapper.entityToDto(entity.cliente);
        }

        if(entity.producto) {
            dto.producto = ProductoMapper.entityToDto(entity.producto);
        }
        return dto;
    }

    static entitiesToDto(entities: RegistroCarrito[]): RegistroCarritoDto[] {
        return entities.map((entity) => {
            return this.entityToDto(entity);
        });
    }

}