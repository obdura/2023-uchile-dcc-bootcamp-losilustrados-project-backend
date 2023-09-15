import { ApiProperty } from "@nestjs/swagger";

export class Recienllegadosproductos{
    constructor(nombre:string,precio:number,descripcion:string,urlImagen:string){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.urlImagen=urlImagen;
    }   

    @ApiProperty({
        type: 'string',
        title: 'Nombre del producto',  
    })
    readonly nombre:string;
    
    @ApiProperty({
        type: 'number',
        title: 'Precio del producto',  
    })
    readonly precio:number;

    @ApiProperty({
        type: 'string',
        title: 'Descripcion del producto',  
    })
    readonly descripcion:string;

    @ApiProperty({
        type: 'string',
        title: 'URL de la imagen del producto',  
    })
    readonly urlImagen;
} 
