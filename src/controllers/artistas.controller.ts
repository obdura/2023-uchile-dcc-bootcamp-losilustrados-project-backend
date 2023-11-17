import { BadRequestException, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, Body } from "@nestjs/common";
import { ApiOkResponse, ApiParam, ApiQuery, ApiBody, ApiTags } from "@nestjs/swagger";
import { ArtistaDto } from "src/dtos/artista.dto";
import { CreateArtistaDto } from "src/dtos/create-artista.dto";
import { ArtistasService } from "src/services/artistas.service";

@ApiTags("Artistas")
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

    @Get("/:id")
    @ApiParam({ name: "id", required: true, type: Number, description: "El identificador del artista."})
    @ApiOkResponse({ description: "El artista encontrado.", type: ArtistaDto })
    async findOne(@Param("id", ParseIntPipe) id: number) {
        try {
            const result: ArtistaDto = await this.artistasService.findOne(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Post()
    @ApiBody({ type: CreateArtistaDto, description: "Datos del artista a crear."})
    @ApiOkResponse({ description: "El artista creado", type: ArtistaDto })
    async createArtista(@Body() createArtistaDto: CreateArtistaDto) {
        try {
            const resultado: ArtistaDto = await this.artistasService.addArtista(createArtistaDto)
            return resultado;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}