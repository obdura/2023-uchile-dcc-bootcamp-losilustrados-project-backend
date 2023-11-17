import { ApiProperty } from "@nestjs/swagger";

export class CreateArtistaDto {

    @ApiProperty({ description: "Nombre del artista" })
    nombre: string

    @ApiProperty({ description: "Apellido del artista" })
    apellido: string

    @ApiProperty({ description: "La url del a imagen de perfil del artista" })
    urlImagenPerfil: string;
}