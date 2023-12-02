import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateMarcaDto } from "src/dtos/create-marca.dto";
import { UpdateMarcaDto } from "src/dtos/update-marca.dto";
import { MarcasService } from "src/services/marcas.service";

@ApiTags("Marcas")
@Controller("marcas")
export class MarcasController {
    
    constructor(
        private readonly marcasService: MarcasService
    ) {}

    @Get()
    async findAll() {
        try {
            const results = this.marcasService.findAll();
            return results;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get("/:id")
    async find(@Param("id") id: number) {
        try {
            const result = this.find(id);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post()
    async create(@Body() createMarcaDto: CreateMarcaDto) {
        try {
            const result = await this.marcasService.create(createMarcaDto);
            return result;
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