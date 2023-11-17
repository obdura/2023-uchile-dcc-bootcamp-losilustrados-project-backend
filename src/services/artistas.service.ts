import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Artista } from "src/entidades/artistas.entity";
import { Repository } from "typeorm";
import { ArtistaDto } from "src/dtos/artista.dto";
import { CreateArtistaDto } from "src/dtos/create-artista.dto";
import { create } from "domain";

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

    async addArtista(createArtistaDto: CreateArtistaDto): Promise<ArtistaDto> {
        let entity: Artista = new Artista();
        entity.nombre = createArtistaDto.nombre;
        entity.apellido = createArtistaDto.apellido;
        entity.urlImagenPerfil = createArtistaDto.urlImagenPerfil;

        const resultado: Artista = await this.artistaRepository.save(entity);

        // TODO: Do this in a mapper.
        let dto = new ArtistaDto();
        dto.id = resultado.id;
        dto.nombre = resultado.nombre;
        dto.apellido = resultado.apellido;
        dto.urlImagenPerfil = resultado.urlImagenPerfil;
        return dto;
    }
}