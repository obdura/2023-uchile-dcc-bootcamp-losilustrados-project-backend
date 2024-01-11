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
import { ProveedoresController } from './controllers/proveedores.controller';
import { MarcasController } from './controllers/marcas.controller';
import { MarcasService } from './services/marcas.service';
import { RegistroCarritoController } from './controllers/registro-carrito.controller';
import { RegistroCarritoService } from './services/registro-carrito.service';
import { RegistroCarrito } from './entidades/registro-carrito.entity';
import { ImagenProducto } from './entidades/productos-imagenes.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Carrito, ProductosPorCarrito } from './entidades/carrito.entity';
import { CarritoController } from './controllers/carrito.controller';
import { CarritoService } from './services/carrito.service';

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
      type: process.env.MYSQL_TYPE as any,  // strange error: https://stackoverflow.com/q/58181006
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        Producto,
        Categoria,
        Marca,
        Ilustracion,
        Proveedor,
        Cliente,
        Artista,
        Inventario,
        RegistroCarrito,
        ImagenProducto,
        Carrito,
        ProductosPorCarrito
      ]
    }),
    TypeOrmModule.forFeature([
      Producto,
      Cliente,
      Artista,
      Inventario,
      Marca,
      RegistroCarrito,
      ImagenProducto,
      Carrito,
      ProductosPorCarrito
    ]),
    JwtModule.register({
      global: true,
      secret: "CLAVE123",
      signOptions: { expiresIn: '43200s' }
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "assets/files"),
    })
  ],
  controllers: [
    ProductosController,
    ClientesController,
    ArtistasController,
    ProveedoresController,
    MarcasController,
    RegistroCarritoController,
    LoginController,
    CarritoController
  ],
  providers: [
    AppService,
    ProductosService,
    ClientesService,
    ArtistasService,
    MarcasService,
    RegistroCarritoService,
    LoginService,
    CarritoService
  ],
})
export class AppModule {}
