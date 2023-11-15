import { ApiProperty } from "@nestjs/swagger";

interface Persona{
    nombre: string;
    direccion: string;
}

interface Usuario{
    email: string;
    password: string;
}

export class Cliente {

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
    
    @ApiProperty({
        type: 'string',
        title: 'Nombre del cliente',  
    })
    readonly nombre: string;
    
    @ApiProperty({
        type: 'string',
        title: 'Direccion del cliente',  
    })
    readonly direccion: string;

    constructor(
        email: string,
        password: string,
        nombre: string,
        direccion: string 
    ) {
        console.log(email);
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}