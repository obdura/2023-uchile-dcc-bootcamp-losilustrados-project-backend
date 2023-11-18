import { ApiProperty } from "@nestjs/swagger";

export class CategoriaDto {
    @ApiProperty({ description: "El id de la categoría", type: Number})
    id: number

    @ApiProperty({ description: "El nombre de la categoría", type: String})
    nombre: string;
}