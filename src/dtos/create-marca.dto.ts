import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMarcaDto {

    @ApiProperty({ description: "El nombre de la marca" })
    @IsString()
    nombre: string;
}