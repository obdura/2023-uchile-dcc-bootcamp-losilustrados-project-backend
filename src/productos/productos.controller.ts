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
        type: CategoriasDto,
        isArray: true
    })
    categorias(): CategoriasDto[] {
        let categorias:CategoriasDto[]=[
            new CategoriasDto("ropa hombre"),
            new CategoriasDto("ropa mujer"),
            new CategoriasDto("ropa niño")
        ];
        return categorias;
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
}
