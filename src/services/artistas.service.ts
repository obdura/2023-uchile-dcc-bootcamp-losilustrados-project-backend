import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Artista } from "src/entidades/artistas.entity";
import { Repository } from "typeorm";
import { ArtistaDto } from "src/dtos/artista.dto";

@Injectable()
export class ArtistasService {
        
    constructor(
        @InjectRepository(Artista) private artistaRepository: Repository<Artista>
        ) {}
        
    async findAll(page: number, limit: number): Promise<ArtistaDto[]> {
        const results: Artista[] = await this.artistaRepository.find(
            {
                order: {
                    id: "ASC"
                },
                take: limit,
                skip: (page - 1) * limit
            }
        );
        
        // TODO: mapper for this!
        // Entities to dtos list
        return results.map((entity) => {
            let dto = new ArtistaDto();
            dto.id = entity.id;
            dto.nombre = entity.nombre;
            dto.apellido = entity.apellido;
            dto.urlImagenPerfil = entity.urlImagenPerfil;
            return dto;
        });
    }

    async findOne(id: number): Promise<ArtistaDto> {
        const entity: Artista = await this.artistaRepository.findOne({
            where: {
                id
            }
        });
        let dto: ArtistaDto = new ArtistaDto();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.apellido = entity.apellido;
        dto.urlImagenPerfil = entity.urlImagenPerfil;
        return dto;
    }
}