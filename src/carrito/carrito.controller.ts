import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Carrito")
@Controller('carrito')
export class CarritoController {
    @Get()
    name(): string {
        return "<h1>Carrito</h1>"
    } 
}
