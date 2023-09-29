import { ApiProperty } from "@nestjs/swagger";

export class Illustrator {

    @ApiProperty({
        type: 'strng',
        title: 'uuid del artista',
    })
    uuid: string;

    @ApiProperty({
        type: 'string',
        title: 'Nombre del artista',
    })
    name: string;

    @ApiProperty({
        type: 'string',
        title: 'Imagen del artista',
    })
    imagePath: string;

    constructor(
        uuid: string,
        name: string,
        imagePath: string
    ) {
        this.uuid = uuid;
        this.name = name;
        this.imagePath = imagePath;
    }
}