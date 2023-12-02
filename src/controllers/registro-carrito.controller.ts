import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AddProductoCarritoDto } from "src/dtos/add-producto-carrito.dto";
import { RegistroCarritoDto } from "src/dtos/registro-carrito.dto";
import { RegistroCarritoService } from "src/services/registro-carrito.service";

@ApiTags("RegistroCarrito")
@Controller("registro-carrito")
export class RegistroCarritoController {

    constructor(
        private readonly registroCarritoService: RegistroCarritoService
    ) {}

    @Get("/cliente/:id")
    async findCarritoCliente(@Param("id") id: number): Promise<RegistroCarritoDto[]> {
        try {
            const results: RegistroCarritoDto[] = await this.registroCarritoService.findCarritoCliente(id);
            return results;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post()
    async addProducto(@Body() dto: AddProductoCarritoDto) {
        try{
            const carrito: RegistroCarritoDto[] = await this.registroCarritoService.add(dto);
            return carrito;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}