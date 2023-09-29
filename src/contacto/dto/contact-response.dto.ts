import { ApiProperty } from "@nestjs/swagger";

export class ContactResponseDto {

    constructor(message: string) {
        this.message = message;
    }

    @ApiProperty({
        type: 'string',
        title: 'Mensaje de la respuesta',
        description: 'Puede ser OK en el caso exitoso, y NOK en el caso fallido'
    })
    message: string;
}