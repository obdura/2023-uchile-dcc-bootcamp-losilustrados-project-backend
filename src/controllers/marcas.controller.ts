import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMarcaDto } from "src/dtos/create-marca.dto";
import { UpdateMarcaDto } from "src/dtos/update-marca.dto";

@ApiTags("Marcas")
@Controller()
export class MarcasController {
    
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
    async create(@Body() createMarcaDto: CreateMarcaDto) {
        try {

        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Patch()
    async update(@Body() updateMarcaDto: UpdateMarcaDto) {
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