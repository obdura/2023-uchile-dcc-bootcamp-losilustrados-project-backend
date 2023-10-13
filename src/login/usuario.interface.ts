interface Persona{
    nombre: string;
    direccion: string;
}

interface Usuario{
    email: string;
    password: string;
}

export class Cliente implements Persona, Usuario {
    email: string;
    password: string;
    nombre: string;
    direccion: string;

    constructor(
        email: string,
        password: string,
        nombre: string,
        direccion: string 
    ) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}