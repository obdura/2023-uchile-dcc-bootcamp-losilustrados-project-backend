import { ApiProperty } from "@nestjs/swagger";

export class InventarioDto {
    @ApiProperty({ description: "Id del inventario"})
    id: number;

    @ApiProperty({ description: "Talla disponible" })
    talla: string;

    @ApiProperty({ description: "Cantidad de productos para la talla" })
    cantidad: number;
}