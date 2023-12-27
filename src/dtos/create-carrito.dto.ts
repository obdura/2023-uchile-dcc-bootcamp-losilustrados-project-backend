import { ApiProperty } from "@nestjs/swagger";

export class CreateCarritoDto {
    @ApiProperty()
    user: string;

    @ApiProperty({isArray: true, type: Number})
    productList: number[];

    @ApiProperty()
    total: number;
}