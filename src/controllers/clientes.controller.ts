import { BadRequestException, Body, Controller, DefaultValuePipe, Delete, Get, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateClienteDto } from "src/dtos/create-cliente.dto";
import { ClienteDto } from "src/dtos/cliente.dto";
import { ClientesService } from "src/services/clientes.service";
import { ApiBody, ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Cliente } from "src/entidades/cliente.entity";

@ApiTags("Usuarios")
@Controller("clientes")
export class ClientesController {

    constructor(
        private readonly clienteService: ClientesService
    ) {}
    
    @Post()
    @ApiBody({ type: CreateClienteDto })
    @ApiOkResponse({ type: ClienteDto })
    async createCliente(
        @Body() createClienteDto: CreateClienteDto
    ) {
        try {
            const cliente: ClienteDto = await this.clienteService.createCliente(createClienteDto);
            return cliente;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de clientes.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de clientes a mostrar por página.'})
    @ApiOkResponse({ description: 'Los clientes encontrados.', type: ClienteDto, isArray: true })
    async findAllClientes(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number
    ) {
        try {
            const resultados: ClienteDto[] = await this.clienteService.findAll(page, limit);
            return resultados;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch("/:id")
    async updateCliente() {

    }

    @Delete("/:id")
    async deleteCliente() {

    }
}