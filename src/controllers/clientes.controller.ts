import { BadRequestException, Body, Controller, Patch, Post } from "@nestjs/common";
import { CreateClienteDto } from "src/dtos/create-cliente.dto";
import { ClienteDto } from "src/dtos/cliente.dto";
import { ClientesService } from "src/services/clientes.service";
import { ApiBody, ApiOkResponse, ApiTags } from "@nestjs/swagger";

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
}