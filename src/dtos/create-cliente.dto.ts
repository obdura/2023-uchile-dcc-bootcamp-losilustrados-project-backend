import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateClienteDto {

    @ApiProperty({ example: "cliente@email.com", description: "Dirección de correo electrónico del cliente"})
    @IsString()
    @MaxLength(255)
    email: string;

    @ApiProperty({ example: "password123", description: "Contraseña de la cuenta." })
    @IsString()
    @MaxLength(255)
    password: string;

    @ApiProperty({ example: "Juan Pablo", description: "Nombre del cliente" })
    @IsString()
    nombres: string;

    @ApiProperty({ example: "Perez Pereira", description: "Apellidos del cliente"})
    @IsString()
    apellidos: string;

    @ApiProperty({ example: "+56912345678", description: "Número telefónico" })
    @IsString()
    telefono: string;

    @ApiProperty({ example: "Calle 123", description: "Direccion de despacho del cliente" })
    @IsString()
    direccionDespacho: string;

    @ApiProperty({ example: "101", description: "Número del departamento de despacho del cliente" })
    @IsNumber()
    numeroDepartamentoDespacho?: number;

    @ApiProperty({ example: "Santiago Centro", description: "Comuna de la dirección de despacho del cliente" })
    @IsString()
    comunaDespacho: string;

    @ApiProperty({ example: "Region Metropolitana", description: "Región de la dirección de despacho del cliente" })
    @IsString()
    regionDespacho: string;

    @ApiProperty({ example: "Calle 123", description: "Direccion de facturacion del cliente" })
    @IsString()
    direccionFacturacion: string;

    @ApiProperty({ example: "101", description: "Número del departamento de facturacion del cliente" })
    @IsNumber()
    numeroDepartamentoFacturacion?: number;

    @ApiProperty({ example: "Santiago Centro", description: "Comuna de la dirección de facturacion del cliente" })
    @IsString()
    comunaFacturacion: string;

    @ApiProperty({ example: "Region Metropolitana", description: "Región de la dirección de facturacion del cliente" })
    @IsString()
    regionFacturacion: string;
}