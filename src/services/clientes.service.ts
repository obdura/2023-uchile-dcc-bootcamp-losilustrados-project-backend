import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteDto } from "src/dtos/cliente.dto";
import { CreateClienteDto } from "src/dtos/create-cliente.dto";
import { Cliente } from "src/entidades/cliente.entity";
import { Role } from "src/enum/role.enum";
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
        cliente.nombres = createClienteDto.nombres;
        cliente.apellidos = createClienteDto.apellidos;
        cliente.telefono = createClienteDto.telefono;
        cliente.direccionDespacho = createClienteDto.direccionDespacho;
        cliente.numeroDepartamentoDespacho = createClienteDto.numeroDepartamentoDespacho;
        cliente.comunaDespacho = createClienteDto.comunaDespacho;
        cliente.regionDespacho = createClienteDto.regionDespacho;
        cliente.direccionFacturacion = createClienteDto.direccionFacturacion;
        cliente.numeroDepartamentoFacturacion = createClienteDto.numeroDepartamentoFacturacion;
        cliente.comunaFacturacion = createClienteDto.comunaFacturacion;
        cliente.regionFacturacion = createClienteDto.regionFacturacion;
        cliente.rol = Role.Cliente;
        
        const resultado: Cliente = await this.clienteRepository.save(cliente);

        // TODO: crear mapper para esto.
        // entity to dto
        let clienteDto = new ClienteDto();
        clienteDto.id = resultado.id;
        clienteDto.email = resultado.email;
        
        return clienteDto;
    }
    
    async findAll(page: number, limit: number): Promise<ClienteDto[]> {
        const resultados = await this.clienteRepository.find(
            {
                order: {
                    id: "ASC"
                },
                take: limit,
                skip: (page - 1) * limit
            }
        )
        return resultados.map((entidad) => {
            let dto = new ClienteDto();
            dto.id = entidad.id;
            dto.email = entidad.email;
            return dto;
        });
    }
    
    async findOne(username: string) {
        const cliente: Cliente = await this.clienteRepository.findOne({
            where: {
                email: username
            }
        });
        if(!cliente) {
            throw new Error("Cliente no encontrado.");
        }
        return cliente;
    }
    

}