import { ApiProperty } from "@nestjs/swagger";

export class EmailDto {
    constructor(email: string) {
        this.email = email;
    }

    @ApiProperty({
        type: 'string',
        title: 'Email del cliente',  
    })
    readonly email: string;
}