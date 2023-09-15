import { ApiProperty } from "@nestjs/swagger";

export class CreateContactMessageDto {

    @ApiProperty({
        type: 'string',
        title: 'Nombre completo del usuario.',
        required: true
    })
    fullName: string;

    @ApiProperty({
        type: 'number',
        title: 'Número telefonico del usuario.',
        example: 56911112222,
        required: true
    })
    phoneNumber: number;

    @ApiProperty({
        type: 'string',
        title: 'Email del usuario.',
        example: 'usuario@test.com',
        required: true
    })
    email: string;

    @ApiProperty({
        type: 'string',
        title: 'Mensaje de contacto del usuario.',
        example: 'Este es un mensaje de ejemplo.',
        required: true
    })
    message: string;
}