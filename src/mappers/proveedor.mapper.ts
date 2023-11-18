import { ProveedorDto } from "src/dtos/proveedor.dto";
import { Proveedor } from "src/entidades/proveedores.entity";

export class ProveedorMapper {

    static entityToDto(entity: Proveedor) {
        let dto: ProveedorDto = new ProveedorDto();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        return dto;
    }

    static dtoToEntity(dto: ProveedorDto) {
        let entity: Proveedor = new Proveedor();
        entity.id = dto.id;
        entity.nombre = dto.nombre;
        return entity;
    }
}