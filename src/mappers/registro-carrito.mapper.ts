import { RegistroCarritoDto } from "src/dtos/registro-carrito.dto";
import { RegistroCarrito } from "src/entidades/registro-carrito.entity";
import { ProductoMapper } from "./producto.mapper";
import { ClienteMapper } from "./cliente.mapper";

export class RegistroCarritoMapper {

    static async entityToDto(entity: RegistroCarrito): Promise<RegistroCarritoDto> {
        let dto: RegistroCarritoDto = new RegistroCarritoDto();
        dto.id = entity.id;
        dto.cantidad = entity.cantidad;
        dto.talla = entity.talla;

        if(entity.cliente) {
            dto.cliente = ClienteMapper.entityToDto(entity.cliente);
        }

        if(entity.producto) {
            dto.producto = await ProductoMapper.entityToDto(entity.producto);
        }
        return dto;
    }

    static async entitiesToDto(entities: RegistroCarrito[]): Promise<RegistroCarritoDto[]> {
        return Promise.all(entities.map(async (entity) => {
            return await this.entityToDto(entity);
        }));
    }

}