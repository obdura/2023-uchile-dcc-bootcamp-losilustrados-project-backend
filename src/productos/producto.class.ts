import { ApiProperty } from "@nestjs/swagger";
import { Illustrator } from "src/illustrator/illustrator.class";

export class Producto {

    @ApiProperty({
        type: 'string',
        title: 'UUID identificador del producto',
    })
    uuid: string;

    @ApiProperty({
        type: 'string',
        title: 'Nombre del producto',
    })
    name: string;

    @ApiProperty({
        type: 'string',
        title: 'Descripcion del producto',
    })
    description: string;

    @ApiProperty({
        type: 'string',
        title: 'Talla del producto',
    })
    size: string;

    @ApiProperty({
        type: 'string',
        title: "Precio del producto",
    })
    price: number;

    @ApiProperty({
        type: 'boolean',
        title: 'Es oferta',
    })
    isOffer: boolean;

    @ApiProperty({
        type: 'boolean',
        title: 'Recien llegado',
    })
    newArrival: boolean;

    @ApiProperty({
        type: 'string',
        title: 'url del thumbnail del producto',
    })
    thumbnailImagePath: string;

    @ApiProperty({
        type: 'string[]',
        title: 'Paths de las imagenes del producto',
    })
    imagePaths: string[];

    @ApiProperty({
        type: 'string',
        title: 'Condicion del producto',
    })
    condition: string;

    @ApiProperty({
        type: 'string[]',
        title: 'Materiales del producto',
    })
    material: string[];

    @ApiProperty({
        type: "Illustrator",
        title: 'Ilustrador del estampado',
    })
    illustrator: Illustrator;

    @ApiProperty({
        type: 'string',
        title: 'Marca del producto',
    })
    brand: string;

    @ApiProperty({
        type: 'string',
        title: 'Categoria del producto'
    })
    category: string;

    constructor(
        uuid: string,
        name: string,
        description: string,
        size: string,
        price: number,
        isOffer: boolean,
        newArrival: boolean,
        thumbnailImagePath: string,
        imagePaths: string[],
        condition: string,
        material: string[],
        illustrator: Illustrator,
        brand: string,
        category: string
    ) {
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.size = size;
        this.price = price;
        this.isOffer = isOffer;
        this.newArrival = newArrival;
        this.thumbnailImagePath = thumbnailImagePath;
        this.imagePaths = imagePaths;
        this.condition = condition;
        this.material = material;
        this.illustrator = illustrator;
        this.brand = brand;
        this.category = category;
    }
}