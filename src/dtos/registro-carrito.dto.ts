import { ApiProperty } from "@nestjs/swagger";
import { ClienteDto } from "./cliente.dto";
import { ProductoDto } from "./producto.dto";

export class RegistroCarritoDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    producto: ProductoDto;

    @ApiProperty()
    cliente: ClienteDto;

    @ApiProperty()
    talla: string;

    @ApiProperty()
    cantidad: number;
}