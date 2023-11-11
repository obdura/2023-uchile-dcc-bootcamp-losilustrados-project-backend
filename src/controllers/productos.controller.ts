import { BadRequestException, Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CreateProductoDto } from 'src/dtos/create-producto.dto';
import { ProductoDto } from 'src/dtos/producto.dto';
import { ProductosService } from 'src/services/productos.service';

@Controller("productos")
export class ProductosController {

    constructor(
        private readonly productoService: ProductosService
    ) {}

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    @ApiOkResponse({ description: 'Los productos encontrados.', type: ProductoDto, isArray: true })
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number
    ) {
        try {
            const result: ProductoDto[] = await this.productoService.findAll(page, limit);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get('/categoria/:categoriaId')
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    @ApiParam({ name: 'categoriaId', required: true, type: Number, description: 'El id de la categoría de los productos a mostrar.'})
    @ApiOkResponse({ description: 'Los productos encontrados.', type: ProductoDto, isArray: true })
    async findByCategoria(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Param('categoriaId', ParseIntPipe) categoriaId: number
    ) {
        try {
            const result: ProductoDto[] = await this.productoService.findByCategoriaId(page, limit, categoriaId);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get("/marca/:marcaId")
    async findByMarca() {
        // TODO
    }

    @Get("/proveedor/:proveedorId")
    async findByProveedor() {
        // TODO
    }

    @Get("/recien-llegados")
    async findByRecienLlegado() {
        // TODO
    }

    @Post("/add")
    async addProducto(@Body() createProductoDto: CreateProductoDto) {
        try {
            const resultado: ProductoDto = await this.productoService.addProducto(createProductoDto);
            return resultado;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}