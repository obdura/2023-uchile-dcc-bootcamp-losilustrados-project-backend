import { ApiProperty } from "@nestjs/swagger";

export class LoginClienteDto{
    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }   

    @ApiProperty({
        type: 'string',
        title: 'Email del cliente',  
    })
    readonly email: string;
    
    @ApiProperty({
        type: 'string',
        title: 'Password del cliente',  
    })
    readonly password: string;
} 
