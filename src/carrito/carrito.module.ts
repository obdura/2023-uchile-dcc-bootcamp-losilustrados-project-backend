import { Module } from '@nestjs/common';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';
import { LoginService } from 'src/login/login.service';
import { ProductosService } from 'src/productos/productos.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [CarritoController],
    //providers: [CarritoService, LoginService, ProductosService]
    imports: [SharedModule]
})
export class CarritoModule {}
