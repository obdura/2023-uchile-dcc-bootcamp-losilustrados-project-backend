import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ProductosModule } from './productos/productos.module';
import { CarritoController } from './carrito/carrito.controller';
import { CarritoModule } from './carrito/carrito.module';
import { PasarelaController } from './pasarela/pasarela.controller';
import { PasarelaModule } from './pasarela/pasarela.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { ContactoController } from './contacto/contacto.controller';
import { ContactoModule } from './contacto/contacto.module';

@Module({
  imports: [ProductosModule, CarritoModule, PasarelaModule, LoginModule, ContactoModule],
  controllers: [AppController, ProductosController, CarritoController, PasarelaController, LoginController, ContactoController],
  providers: [AppService],
})
export class AppModule {}
