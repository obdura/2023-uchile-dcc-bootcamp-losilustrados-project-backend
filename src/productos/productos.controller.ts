import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Productos")
@Controller('productos')
export class ProductosController {
    @Get()
    name(): string {
        return "<h1>Productos</h1>"
    }
}
