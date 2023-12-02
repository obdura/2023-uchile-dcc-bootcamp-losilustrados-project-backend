import { ClienteDto } from "src/dtos/cliente.dto";
import { Cliente } from "src/entidades/cliente.entity";

export class ClienteMapper {

    static entityToDto(entity: Cliente): ClienteDto {
        let dto: ClienteDto = new ClienteDto();
        dto.id = entity.id;
        dto.email = entity.email;
        return dto;
    }

    static dtoToEntity(dto: ClienteDto): Cliente {
        let entity: Cliente = new Cliente();
        entity.email = dto.email;
        entity.id = dto.id;
        return entity;
    }
}