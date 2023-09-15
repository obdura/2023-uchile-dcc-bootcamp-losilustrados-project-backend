import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriasDto } from './dto/categorias.dto';
import { Recienllegadosproductos } from './dto/productos.dto';

@ApiTags("Productos")
@Controller('productos')
export class ProductosController {
    @Get()
    name(): string {
        return "<h1>Productos</h1>"
    }

    @Get("/categorias")
    @ApiResponse({
        status:200,
        description:"Categorias de productos",
        type:CategoriasDto
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
        status:200,
        description:"Productos recien llegados",
        type:Recienllegadosproductos
    })
    
    recienllegados():Recienllegadosproductos[] {
        let productosrecienllegados:Recienllegadosproductos[]=[
            new Recienllegadosproductos("vestido",10000,"es un vestido","url"),
            new Recienllegadosproductos("pantalon",15000,"es un pantalon","url"),
            new Recienllegadosproductos("polera",5000,"es una polera","url")
        ];
        return productosrecienllegados;
    }
}
