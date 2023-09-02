import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Contacto")
@Controller('contacto')
export class ContactoController {
    @Get()
    name(): string {
        return "<h1>Contacto</h1>"
    } 
}
