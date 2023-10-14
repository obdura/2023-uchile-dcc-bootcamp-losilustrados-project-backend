interface Persona{
    nombre: string;
    direccion: string;
}

interface Usuario{
    email: string;
    password: string;
}

export class Cliente {
    readonly email: string;
    readonly password: string;
    readonly nombre: string;
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