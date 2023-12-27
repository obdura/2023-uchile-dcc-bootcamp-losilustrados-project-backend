import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCarritoDto } from "src/dtos/create-carrito.dto";
import { CarritoService } from "src/services/carrito.service";

@ApiTags("Carrito")
@Controller("carrito")
export class CarritoController {
    
    constructor(
        private readonly carritoService: CarritoService
    ) {}

    @Post()
    async postCarrito(@Body() createCarritoDto: CreateCarritoDto) {
        try {
            await this.carritoService.createCarrito(createCarritoDto);
            return { 'message': 'OK' };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}