import { BadRequestException, Body, Controller, DefaultValuePipe, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query, UseGuards, Headers, Request, ParseBoolPipe, ParseArrayPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiExcludeEndpoint, ApiHeader, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from 'src/dtos/create-producto.dto';
import { ProductoDto } from 'src/dtos/producto.dto';
import { RegistrarImagenProductoDto } from 'src/dtos/registrar-imagen-producto.dto';
import { UpdateProductoDto } from 'src/dtos/update-producto.dto';
import { ProductosService } from 'src/services/productos.service';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/enum/role.enum';
import { RolesGuard } from 'src/guards/roles.guard';

@ApiTags("Productos")
@Controller("productos")
export class ProductosController {

    constructor(
        private readonly productoService: ProductosService
    ) {}

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'La página del listado de productos.'})
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'El número de productos a mostrar por página.'})
    @ApiQuery({ name: "talla", required: false})
    @ApiQuery({ name: "marca", required: false})
    //@ApiQuery({ name: "ilustradorId", required: false, isArray: true, type: Number})
    @ApiQuery({ name: "oferta", required: false})
    @ApiQuery({ name: "precioMax", required: false})
    @ApiQuery({ name: "precioMin", required: false})
    @ApiOkResponse({ description: 'Los productos encontrados.', type: ProductoDto, isArray: true })
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
        @Query("talla") talla: string,
        @Query("marca") marca: string,
        //@Query("ilustradorId", new DefaultValuePipe([]), ParseArrayPipe) ilustradorId: number[],
        @Query("oferta", new DefaultValuePipe(false), ParseBoolPipe) oferta: boolean,
        @Query("precioMin", new DefaultValuePipe(0), ParseIntPipe) precioMin: number,
        @Query("precioMax", new DefaultValuePipe(10000000000), ParseIntPipe) precioMax: number
    ) {
        try {
            const result: ProductoDto[] = await this.productoService.findAll(
                page,
                limit,
                talla,
                marca,
                //ilustradorId,
                oferta,
                precioMax,
                precioMin
            );
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

    @ApiBearerAuth('general')
    @Roles(Role.Admin)
    @UseGuards(AuthenticationGuard, RolesGuard)
    @Post()
    @ApiHeader({ name: "Authentication", description: "Token de autenticación", required: true })
    async addProducto(@Headers("Authentication") token: string, @Body() createProductoDto: CreateProductoDto) {
        // console.log(token);
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
            throw new NotFoundException(error.message);
        }
    }

    @ApiBearerAuth('general')
    @Roles(Role.Admin)
    @UseGuards(AuthenticationGuard, RolesGuard)
    @Patch("/update/:id")
    @ApiBody({ type: UpdateProductoDto, description: "Datos del producto a actualizar"})
    @ApiParam({ name: "id", required: true, description: "Id del producto a actualizar" })
    @ApiOkResponse({ description: "Producto actualizado", type: ProductoDto})
    @ApiNotFoundResponse({ description: "No se encontró el producto" })
    @ApiHeader({ name: "Authentication", description: "Token de autenticación", required: true })
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

    @Post("/imagen")
    async registrarImagen(@Body() registrarImagenDto: RegistrarImagenProductoDto) {
        try {
            this.productoService.registrarImagen(registrarImagenDto);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}