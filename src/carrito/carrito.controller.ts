import { Controller, Get } from '@nestjs/common';

@Controller('carrito')
export class CarritoController {
    @Get()
    name(): string {
        return "<h1>Carrito</h1>"
    } 
}
