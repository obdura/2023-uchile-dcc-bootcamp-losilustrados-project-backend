import { Controller, Get } from '@nestjs/common';

@Controller('contacto')
export class ContactoController {
    @Get()
    name(): string {
        return "<h1>Contacto</h1>"
    } 
}
