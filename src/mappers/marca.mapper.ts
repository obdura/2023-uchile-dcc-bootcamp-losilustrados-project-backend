import { MarcaDto } from "src/dtos/marca.dto";
import { Marca } from "src/entidades/marca.entity";

export class MarcaMapper {

    static entityToDto(entity: Marca) {
        let dto: MarcaDto = new MarcaDto();
        if(entity.id) {
            dto.id = entity.id;
        }
        dto.nombre = entity.nombre;
        return dto;
    }

    static dtoToEntity(dto: MarcaDto) {
        let entity: Marca = new Marca();
        entity.id = dto.id;
        entity.nombre = dto.nombre;
        return entity;
    }
}