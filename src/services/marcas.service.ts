import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMarcaDto } from "src/dtos/create-marca.dto";
import { Marca } from "src/entidades/marca.entity";
import { Repository } from "typeorm";

@Injectable()
export class MarcasService {
    
    constructor(
        @InjectRepository(Marca) private marcaRepository: Repository<Marca>
    ) {}

    async findAll() {
        const results = await this.marcaRepository.find({
            order: {
                id: "ASC"
            }
        });
        
        type MarcaDto = {
            id: number,
            nombre: string
        }

        const dtos: MarcaDto[] = results.map((entidad) => {
            let dto: MarcaDto = {
                id: entidad.id,
                nombre: entidad.nombre
            };
            return dto;
        })
        return dtos;
    }

    async find(id: number) {
        const result = await this.marcaRepository.findOne({
            where: {
                id: id
            }
        });

        if (!result) {
            throw Error("No se encontró la marca");
        }

        type MarcaDto = {
            id: number,
            nombre: string
        }

        const dto: MarcaDto = {
            id: result.id,
            nombre: result.nombre
        }
        return dto;
    }

    async create(createMarcaDto: CreateMarcaDto) {
        const entidad: Marca = new Marca();
        entidad.nombre = createMarcaDto.nombre;
        
        const result: Marca = await this.marcaRepository.save(entidad);
        type MarcaDto = {
            id: number,
            nombre: string
        }
        const dto: MarcaDto = {
            id: result.id,
            nombre: result.nombre
        }
        return dto;
    }
}