import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriasDto } from './dto/categorias.dto';
import { Recienllegadosproductos } from './dto/productos.dto';
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

    @Get("/categorias")
    @ApiResponse({
        status: 200,
        description: "Categorias de productos",
        type: CategoriasDto,
        isArray: true
    })
    categorias():CategoriasDto[] {
        let categorias:CategoriasDto[]=[
            new CategoriasDto("ropa hombre"),
            new CategoriasDto("ropa mujer"),
            new CategoriasDto("ropa niño")
        ];
        return categorias;
    }

    @Get("/recien-llegados")
    @ApiResponse({
        status: 200,
        description: "Productos recien llegados",
        type: Recienllegadosproductos,
        isArray: true
    })
    recienllegados():Recienllegadosproductos[] {
        let productosrecienllegados:Recienllegadosproductos[]=[
            new Recienllegadosproductos("vestido",10000,"es un vestido","url"),
            new Recienllegadosproductos("pantalon",15000,"es un pantalon","url"),
            new Recienllegadosproductos("polera",5000,"es una polera","url")
        ];
        return productosrecienllegados;
    }

    @Get("/ofertas")
    @ApiResponse({
        status: 200,
        description: "Listado de productos con ofertas",
        type: Producto,
        isArray: true
    })
    productosOfertas(): Producto[] {
        return this.productosService.findProductosOfertas();
    }
}
