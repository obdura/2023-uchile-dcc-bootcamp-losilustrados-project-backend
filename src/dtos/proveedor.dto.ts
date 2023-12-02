import { ApiProperty } from "@nestjs/swagger";

export class ProveedorDto {

    @ApiProperty({ description: "Id del proveedor", type: Number})
    id: number;

    @ApiProperty({ description: "Nombre del proveedor", type: String})
    nombre: string;
}