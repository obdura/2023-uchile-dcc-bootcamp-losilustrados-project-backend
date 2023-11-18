import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateProveedorDto } from "src/dtos/create-proveedor.dto";
import { UpdateProveedorDto } from "src/dtos/update-proveedor.dto";

@ApiTags("Proveedores")
@Controller("proveeedores")
export class ProveedoresController {
    
    constructor(

    ) {}

    @Get()
    async findAll() {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get("/:id")
    async find(@Param("id") id: number) {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post()
    async create(@Body() createProveedorDto: CreateProveedorDto) {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch()
    async update(@Body() updateProveedorDto: UpdateProveedorDto) {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Delete("/:id")
    async delete(@Param("id") id: number) {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}