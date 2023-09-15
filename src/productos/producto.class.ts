export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    urlImagen: string;
    oferta: boolean;
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