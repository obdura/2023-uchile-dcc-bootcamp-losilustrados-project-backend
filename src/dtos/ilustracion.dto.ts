import { ApiProperty } from "@nestjs/swagger";

export class IlustracionDto {

    @ApiProperty({ description: "Id de la ilustración", type: Number})
    id: number;
}