import { CategoriaDto } from "src/dtos/categoria.dto";
import { Categoria } from "src/entidades/categoria.entity";

export class CategoriaMapper {

    static entityToDto(entity: Categoria) {
        let dto: CategoriaDto = new CategoriaDto();
        if(entity === undefined) {
            console.log("Entidad es undefined.");
        }
        if(entity.id) {
            dto.id = entity.id;
        }
        dto.nombre = entity.nombre;
        return dto;
    }

    static dtoToEntity(dto: CategoriaDto) {
        let entity: Categoria = new Categoria();
        entity.id = dto.id;
        entity.nombre = dto.nombre;
        return entity;
    }

}