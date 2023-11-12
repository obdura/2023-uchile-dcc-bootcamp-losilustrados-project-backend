import { BadRequestException, Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from "@nestjs/common";
import { ApiOkResponse, ApiQuery } from "@nestjs/swagger";
import { ArtistaDto } from "src/dtos/artista.dto";
import { ArtistasService } from "src/services/artistas.service";

@Controller("artistas")
export class ArtistasController {

    constructor(
        private readonly artistasService: ArtistasService
    ) {}

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'El número de página del listado de artistas.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de artistas a mostrar por página.'})
    @ApiOkResponse({ description: "Los artistas encontrados", type: ArtistaDto, isArray: true})
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number
    ) {
        try {
            const results: ArtistaDto[] = await this.artistasService.findAll(page, limit);
            return results;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

}