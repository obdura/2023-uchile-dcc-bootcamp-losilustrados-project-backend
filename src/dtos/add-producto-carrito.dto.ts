import { ApiProperty } from "@nestjs/swagger";
import { ProductoDto } from "./producto.dto";

export class AddProductoCarritoDto {

    @ApiProperty()
    producto: ProductoDto;

    @ApiProperty()
    cantidad: number;

    @ApiProperty()
    talla: string;

    @ApiProperty()
    idCliente: number;
}