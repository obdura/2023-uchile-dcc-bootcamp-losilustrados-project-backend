import { BadRequestException, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProductosService } from 'src/services/productos.service';

@Controller("productos")
export class ProductosController {

    constructor(
        private readonly productoService: ProductosService
    ) {}

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number
    ) {
        try {
            const result = await this.productoService.findAll(page, limit);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get('/categoria/:categoriaId')
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    @ApiParam({ name: 'categoriaId', required: true, type: Number, description: 'El id de la categoría de los productos a mostrar.'})
    async findByCategoria(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Param('categoriaId', ParseIntPipe) categoriaId: number
    ) {
        try {
            const result = await this.productoService.findByCategoriaId(page, limit, categoriaId);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}