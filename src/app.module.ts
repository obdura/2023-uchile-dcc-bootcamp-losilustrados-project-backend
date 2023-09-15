import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CarritoModule } from './carrito/carrito.module';
import { PasarelaModule } from './pasarela/pasarela.module';
import { LoginModule } from './login/login.module';
import { ContactoModule } from './contacto/contacto.module';

@Module({
  imports: [ProductosModule, CarritoModule, PasarelaModule, LoginModule, ContactoModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
