import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { RegistroCarritoDto } from "src/dtos/registro-carrito.dto";
import { RegistroCarrito } from "src/entidades/registro-carrito.entity";
import { RegistroCarritoMapper } from "src/mappers/registro-carrito.mapper";
import { Repository } from "typeorm";

@Injectable()
export class RegistroCarritoService {
    
    constructor(
        @InjectRepository(RegistroCarrito) private registroCarritoRepository: Repository<RegistroCarrito>   
    ) {}
    
    async findCarritoCliente(id: number): Promise<RegistroCarritoDto[]> {
        const results: RegistroCarrito[] = await this.registroCarritoRepository.find({
            where: {
                cliente: {
                    id: id
                }
            },
            relations: {
                producto: true
            }            
        })
        if(!results) {
            throw Error("Cliente no registra elementos en el carrito");
        }
        
        return RegistroCarritoMapper.entitiesToDto(results);
    }

}