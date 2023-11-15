import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriasDto } from './dto/categorias.dto';
import { ProductosService } from './productos.service';
import { Producto } from './producto.class';

@ApiTags("Productos")
@Controller('productos')
export class ProductosController {

    constructor(private productosService: ProductosService) {}

    @Get()
    name(): string {
        return "<h1>Productos</h1>"
    }

    @Get("/producto/:uuid")
    @ApiResponse({
        status: 200,
        description: "Encuentra producto por uuid",
        type: Producto,
    })
    productoDetail(@Param('uuid') uuid: string): Producto {
        return this.productosService.findProductoByUUID(uuid);
    }

    @Get("/categorias")
    @ApiResponse({
        status: 200,
        description: "Categorias de productos",
        type: String,
        isArray: true
    })
    categorias(): string[] {
        return this.productosService.findAllCategories();
    }

    @Get('/all')
    @ApiResponse({
        status: 200,
        description: "Todos los productos",
        type: Producto,
        isArray: true,
    })
    all(): Producto[] {
        console.log("Productos invocado");

        return this.productosService.findAll();
    }

    @Get("/recien-llegados")
    @ApiResponse({
        status: 200,
        description: "Productos recien llegados",
        type: Producto,
        isArray: true
    })
    newArrival(): Producto[] {
        return this.productosService.findProductosRecienLlegados();
    }

    @Get("/ofertas")
    @ApiResponse({
        status: 200,
        description: "Listado de productos con ofertas",
        type: Producto,
        isArray: true
    })
    offers(): Producto[] {
        return this.productosService.findProductosOfertas();
    }

    @Get("/size/:size")
    @ApiResponse({
        status: 200,
        description: "Listado de productos por talla.",
        type: Producto,
        isArray: true,
    })
    productosBySize(@Param('size') size: string) {
        return this.productosService.findProductsBySize(size);
    }

    @Get("/artista/:uuid")
    @ApiResponse({
        status: 200,
        description: "Listado de productos asociados a un artista.",
        type: Producto,
        isArray: true,
    })
    productosByArtista(@Param('uuid') uuid: string) {
        return this.productosService.findProductByArtista(uuid);
    }

    @Get("/categoria/:category")
    @ApiResponse({
        status: 200,
        description: 'Listado de productos por categoria.',
        type: Producto,
        isArray: true
    })
    productosByCategory(@Param('category') category: string): Producto[] {
        return this.productosService.findProductsByCategory(category);
    }

    @Get("/brands")
    @ApiResponse({
        status: 200,
        description: "Listado de marcas.",
        type: String,
        isArray: true,
    })
    brands(): string[] {
        return this.productosService.findAllBrands();
    }

    @Get("/brands/:brand")
    @ApiResponse({
        status: 200,
        description: 'Listado de productos por marca.',
        type: Producto,
        isArray: true
    })
    productosByBrand(@Param('brand') brand: string): Producto[] {
        return this.productosService.findProductsByBrand(brand);
    }
}
