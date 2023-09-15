import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { ContactResponseDto } from './dto/contact-response.dto';

@ApiTags("Contacto")
@Controller('contacto')
export class ContactoController {
    @Get()
    name(): string {
        return "<h1>Contacto</h1>"
    }

    @ApiBody({ description: "Envia un mensaje de contacto.", type: CreateContactMessageDto })
    @ApiResponse({ 
        status: 200, 
        description: 'Envío exitoso del mensaje de contacto.', 
        type: ContactResponseDto 
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Envio fallido del mensaje de contacto.', 
        type: ContactResponseDto 
    })
    @Post()
    sendMessage(@Body() createContactMessageDto: CreateContactMessageDto) {
        return new ContactResponseDto('OK');
    }
}
