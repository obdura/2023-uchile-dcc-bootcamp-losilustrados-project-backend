import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// import { ProductosModule } from './productos/productos.module';
// import { CarritoModule } from './carrito/carrito.module';
// import { PasarelaModule } from './pasarela/pasarela.module';
// import { LoginModule } from './login/login.module';
// import { ContactoModule } from './contacto/contacto.module';
// import { IllustratorModule } from './illustrator/illustrator.module';
// import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entidades/producto.entity';
import { Categoria } from './entidades/categoria.entity';
import { Marca } from './entidades/marca.entity';
import { Ilustracion } from './entidades/ilustracion.entity';
import { ProductosController } from './controllers/productos.controller';
import { ProductosService } from './services/productos.service';

@Module({
  imports: [
    // SharedModule, 
    // ProductosModule, 
    // CarritoModule, 
    // PasarelaModule, 
    // LoginModule, 
    // ContactoModule, 
    // IllustratorModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,  // strange error: https://stackoverflow.com/q/58181006
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      entities: [
        Producto,
        Categoria,
        Marca,
        Ilustracion
      ]
    }),
    TypeOrmModule.forFeature([
      Producto
    ])
  ],
  controllers: [
    ProductosController,
  ],
  providers: [
    AppService,
    ProductosService
  ],
})
export class AppModule {}
