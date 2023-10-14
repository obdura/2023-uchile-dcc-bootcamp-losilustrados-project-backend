import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cliente } from 'src/login/usuario.interface';
import { LoginService } from '../login/login.service';
import { CarritoService } from './carrito.service';
import { Producto } from 'src/productos/producto.class';
import { ProductosService } from 'src/productos/productos.service';
import { EmailDto } from './email.dto';
import { InsertProductoDto } from './insertProducto.dto';

@ApiTags("Carrito")
@Controller('carrito')
export class CarritoController {

    constructor(private loginService: LoginService, private carritoService: CarritoService, private productosService: ProductosService) {}

    @Get()
    name(): string {
        return "<h1>Carrito</h1>"
    }

    @Post("crear-carrito")
    crearCarrito(@Body() emailDto: EmailDto) {
        let cliente: Cliente = this.loginService.obtenerClientePorEmail(emailDto.email);
        if (cliente == null) {
            return {
                mensaje: "Cliente con ese email no existe."
            };
        }

        this.carritoService.crearCarrito(cliente);
        return {
            mensaje: "Carrito creado exitosamente"
        };
    }

    @Post("agregar-producto-al-carrito")
    agregarProductoAlCarrito(@Body() insertPorductoDto: InsertProductoDto) {
        // TODO: Considerar cantidad del producto.
        let cliente: Cliente = this.loginService.obtenerClientePorEmail(insertPorductoDto.email);
        if (cliente == null) {
            return {
                mensaje: "Cliente con ese email no existe."
            };
        }
        let producto: Producto = this.productosService.findProductoByUUID(insertPorductoDto.uuidProducto);
        this.carritoService.agregarProductoCarrito(cliente, producto);
        return {
            mensaje: `Producto agregado al carrito de ${cliente.email}`
        };
    }

    @Get("obtener-productos-del-carrito/:email")
    obtenerProductosDelCarrito(@Param("email") email: string) {
        let cliente: Cliente = this.loginService.obtenerClientePorEmail(email);
        if (cliente == null) {
            return {
                mensaje: "Cliente con ese email no existe."
            };
        }
        return this.carritoService.obtenerListadoProductosDelCarritoDelCliente(cliente);
    }
}
