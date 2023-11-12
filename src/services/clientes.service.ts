import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteDto } from "src/dtos/cliente.dto";
import { CreateClienteDto } from "src/dtos/create-cliente.dto";
import { Cliente } from "src/entidades/cliente.entity";
import { Repository } from "typeorm";


@Injectable()
export class ClientesService {
    
    constructor(
        @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>
    ) {}
        
    async createCliente(createClienteDto: CreateClienteDto): Promise<ClienteDto> {
        const result = await this.clienteRepository.findOne(
            {
                where: {
                    email: createClienteDto.email
                }
            }
        );

        if (result) {
            throw Error("Ya existe un cliente registrado con ese correo electrónico.");
        }

        // TODO: crear mapper para esto.
        // dto to entity
        let cliente = new Cliente();
        cliente.email = createClienteDto.email;
        cliente.password = createClienteDto.password;

        const resultado: Cliente = await this.clienteRepository.save(cliente);

        // TODO: crear mapper para esto.
        // entity to dto
        let clienteDto = new ClienteDto();
        clienteDto.email = resultado.email;

        return clienteDto;
    }

}