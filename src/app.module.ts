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
import { Proveedor } from './entidades/proveedores.entity';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';
import { Cliente } from './entidades/cliente.entity';
import { Artista } from './entidades/artistas.entity';
import { ArtistasController } from './controllers/artistas.controller';
import { ArtistasService } from './services/artistas.service';
import { Inventario } from './entidades/inventario.entity';
import { ProveedoresController } from './controllers/proveedores.dto';
import { MarcasController } from './controllers/marcas.controller';

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
      type: process.env.MYSQL_DB_TYPE as any,  // strange error: https://stackoverflow.com/q/58181006
      host: process.env.MYSQL_DB_HOST,
      port: parseInt(process.env.MYSQL_DB_PORT, 10),
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASS,
      database: process.env.MYSQL_DB_DB,
      entities: [
        Producto,
        Categoria,
        Marca,
        Ilustracion,
        Proveedor,
        Cliente,
        Artista,
        Inventario
      ]
    }),
    TypeOrmModule.forFeature([
      Producto,
      Cliente,
      Artista,
      Inventario
    ])
  ],
  controllers: [
    ProductosController,
    ClientesController,
    ArtistasController,
    ProveedoresController,
    MarcasController
  ],
  providers: [
    AppService,
    ProductosService,
    ClientesService,
    ArtistasService
  ],
})
export class AppModule {}
