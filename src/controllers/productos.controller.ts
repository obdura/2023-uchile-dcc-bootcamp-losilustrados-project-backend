import { BadRequestException, Body, Controller, DefaultValuePipe, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiExcludeEndpoint, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from 'src/dtos/create-producto.dto';
import { ProductoDto } from 'src/dtos/producto.dto';
import { UpdateProductoDto } from 'src/dtos/update-producto.dto';
import { ProductosService } from 'src/services/productos.service';

@ApiTags("Productos")
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


    @Get('/marcas/:marcaId')
    async findAllByMarcaId(@Param('marcaId') marcaId: number) {
      //const productos = await this.productoService.findAllByMarcaId(marcaId);
      //return productos.map(producto => {
      //  let productoDto:ProductoDto=new ProductoDto();
      //  productoDto.id= producto.id;
      //  productoDto.nombre= producto.nombre;
      //  productoDto.descripcion= producto.descripcion;
      //  productoDto.idCategoria= producto.idCategoria;
      //  productoDto.idIlustracion= producto.idIlustracion;
      //  productoDto.idMarca= producto.idMarca;
      //  productoDto.idProveedor= producto.idProveedor;
      //  productoDto.precio= producto.precio;
      //  productoDto.inventario= producto.inventarios;
      //  return productoDto;
      //  // Mapea otras propiedades aquí
      //});
    }

    //MC
    /*
    @Get("marca/:marcaId")
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    @ApiParam({ name: 'marcaId', required: true, type: Number, description: 'El id de la marca de los productos a mostrar.'})
    @ApiOkResponse({ description: 'Los productos encontrados.', type: ProductoDto, isArray: true })
    async findByMarca(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Param('marcaId', ParseIntPipe) marcaId: number
    ) {
        try {
            const result: ProductoDto[] = await this.productoService.findByMarcaId(page, limit, marcaId);
            return result;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
*/


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


    @Get("/:id")
    @ApiParam({ name: "id", required: true, description: "Id del producto a buscar" })
    @ApiOkResponse({ description: "Producto encontrado", type: ProductoDto })
    @ApiNotFoundResponse({ description: "No se encontró el producto" })
    async findProducto(@Param("id") id: number) {
        try {
            const resultado = await this.productoService.findProducto(id);
            return resultado;
        } catch (error) {
            console.log(error);
            throw new NotFoundException(error.message);
        }
    }

    @Patch("/update/:id")
    @ApiBody({ type: UpdateProductoDto, description: "Datos del producto a actualizar"})
    @ApiParam({ name: "id", required: true, description: "Id del producto a actualizar" })
    @ApiOkResponse({ description: "Producto actualizado", type: ProductoDto})
    @ApiNotFoundResponse({ description: "No se encontró el producto" })
    async updateProducto(@Param("id") id: number, @Body() updateProductoDto: UpdateProductoDto) {
        try{
            const resultado = await this.productoService.updateProducto(id, updateProductoDto);
            return resultado;
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Delete(":id")
    //@ApiExcludeEndpoint()  // al eliminar un producto colisiona con los registros de otras tablas que lo referencian. TODO!!
    @ApiParam({ name: "id", required: true, description: "Id del producto a eliminar" })
    @ApiOkResponse({ description: "Producto eliminado", type: ProductoDto})
    @ApiNotFoundResponse({ description: "No se encontró el producto" })
    async deleteProducto(@Param("id") id: number) {
        try {
            const resultado = await this.productoService.deleteProducto(id);
            return resultado;
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}