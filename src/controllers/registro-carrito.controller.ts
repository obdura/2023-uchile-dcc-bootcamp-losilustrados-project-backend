import { BadRequestException, Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
}