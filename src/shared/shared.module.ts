import { Module } from '@nestjs/common';
import { CarritoService } from 'src/carrito/carrito.service';
import { LoginService } from 'src/login/login.service';
import { ProductosService } from 'src/productos/productos.service';

@Module({
    providers: [LoginService, ProductosService, CarritoService],
    exports: [LoginService, ProductosService, CarritoService]
})
export class SharedModule {}