import { Controller, Get } from '@nestjs/common';

@Controller('pasarela')
export class PasarelaController {
    @Get()
    name(): string {
        return "<h1>Pasarela</h1>"
    } 
}
