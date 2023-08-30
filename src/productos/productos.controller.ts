import { Controller, Get } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
    @Get()
    name(): string {
        return "<h1>Productos</h1>"
    }
}
