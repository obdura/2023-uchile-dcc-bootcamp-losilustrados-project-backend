import { ApiProperty } from "@nestjs/swagger";

export class Producto {

    @ApiProperty({
        type: 'number',
        title: 'Identificador del producto',  
    })
    id: number;

    @ApiProperty({
        type: 'string',
        title: 'Nombre del producto',  
    })
    nombre: string;

    @ApiProperty({
        type: 'string',
        title: 'Descripcion del producto',  
    })
    descripcion: string;

    @ApiProperty({
        type: 'number',
        title: 'Precio del producto',  
    })
    precio: number;

    @ApiProperty({
        type: 'string',
        title: 'url de la imagen del producto',  
    })
    urlImagen: string;

    @ApiProperty({
        type: 'boolean',
        title: 'Oferta',  
        description: 'Indica si es un producto en oferta'
    })
    oferta: boolean;

    @ApiProperty({
        type: 'boolean',
        title: 'Producto recien llegado',
        description: 'Indica si es un producto recien llegado'  
    })
    recienLlegado: boolean;

    constructor(
        id: number,
        nombre: string,
        descripcion: string,
        precio: number,
        urlImagen: string,
        oferta: boolean,
        recienLlegado: boolean
    ) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImagen = urlImagen;
        this.oferta = oferta;
        this.recienLlegado = recienLlegado;
    }
}