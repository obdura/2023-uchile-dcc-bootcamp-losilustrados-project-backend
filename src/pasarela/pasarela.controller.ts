import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Pasarela")
@Controller('pasarela')
export class PasarelaController {
    @Get()
    name(): string {
        return "<h1>Pasarela</h1>"
    } 
}
