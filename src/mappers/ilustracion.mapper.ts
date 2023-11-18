import { IlustracionDto } from "src/dtos/ilustracion.dto";
import { Ilustracion } from "src/entidades/ilustracion.entity";

export class IlustracionMapper {

    static entityToDto(entity: Ilustracion) {
        let dto: IlustracionDto = new IlustracionDto();
        if(entity.id) {
            dto.id = entity.id;
        }
        return dto
    }

    static dtoToEntity(dto: IlustracionDto) {
        let entity: Ilustracion = new Ilustracion();
        entity.id = dto.id;
        return entity
    }

}