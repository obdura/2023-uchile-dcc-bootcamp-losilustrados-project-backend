import { ApiProperty } from "@nestjs/swagger";
export class CategoriasDto{

    constructor(nombre:string){
        this.nombre=nombre;
    }

    @ApiProperty({
        type: 'string',
        title: 'Nombre de la categoria',  
    })
    readonly nombre:string;
}