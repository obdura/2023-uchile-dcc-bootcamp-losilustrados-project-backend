import { ApiOAuth2, ApiProperty } from "@nestjs/swagger";

export class MarcaDto {

    @ApiProperty({ description: "Id de la marca", type: Number})
    id: number;

    @ApiProperty({ description: "Nombre de la marca", type: String})
    nombre: string;

}