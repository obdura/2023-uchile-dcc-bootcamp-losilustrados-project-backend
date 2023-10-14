import { ApiProperty } from "@nestjs/swagger";

export class InsertProductoDto {
    constructor(uuidProducto: string, email: string) {
        this.uuidProducto = uuidProducto;
        this.email = email;
    }

    @ApiProperty({
        type: 'string',
        title: 'Identificador del producto',  
    })
    readonly uuidProducto: string;

    @ApiProperty({
        type: 'string',
        title: 'Email del cliente',  
    })
    readonly email: string;
}