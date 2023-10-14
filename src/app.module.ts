import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CarritoModule } from './carrito/carrito.module';
import { PasarelaModule } from './pasarela/pasarela.module';
import { LoginModule } from './login/login.module';
import { ContactoModule } from './contacto/contacto.module';
import { IllustratorModule } from './illustrator/illustrator.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, ProductosModule, CarritoModule, PasarelaModule, LoginModule, ContactoModule, IllustratorModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
