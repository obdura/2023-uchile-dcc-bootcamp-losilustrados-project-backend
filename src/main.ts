import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ProductosModule } from './productos/productos.module';
import { CarritoModule } from './carrito/carrito.module';
import { ContactoModule } from './contacto/contacto.module';
import { LoginModule } from './login/login.module';
import { PasarelaModule } from './pasarela/pasarela.module';
import { IllustratorModule } from './illustrator/illustrator.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Los Ilustrados API Doc')
    .setDescription('Documentación General de la API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Carrito Swagger
  const carritoConfig = new DocumentBuilder()
    .setTitle("Carrito API")
    .setDescription("Documentacion de la API Carrito")
    .setVersion('1.0')
    .addTag('Carrito')
    .build();

  const carritoDocument = SwaggerModule.createDocument(app, carritoConfig, {
    include: [CarritoModule]
  });
  SwaggerModule.setup('api/carrito', app, carritoDocument);

  // Contacto Swagger
  const contactoConfig = new DocumentBuilder()
    .setTitle("Contacto API")
    .setDescription("Documentacion de la API Contacto")
    .setVersion('1.0')
    .addTag('Contacto')
    .build();

  const contactoDocument = SwaggerModule.createDocument(app, contactoConfig, {
    include: [ContactoModule]
  });
  SwaggerModule.setup('api/contacto', app, contactoDocument);

  // Login Swagger
  const loginConfig = new DocumentBuilder()
    .setTitle("Login API")
    .setDescription("Documentacion de la API Login")
    .setVersion('1.0')
    .addTag('Login')
    .build();

  const loginDocument = SwaggerModule.createDocument(app, loginConfig, {
    include: [LoginModule]
  });
  SwaggerModule.setup('api/login', app, loginDocument);

  // Pasarela Swagger
  const pasarelaConfig = new DocumentBuilder()
    .setTitle("Pasarela API")
    .setDescription("Documentacion de la API Pasarela")
    .setVersion('1.0')
    .addTag('Pasarela')
    .build();

  const pasarelaDocument = SwaggerModule.createDocument(app, pasarelaConfig, {
    include: [PasarelaModule]
  });
  SwaggerModule.setup('api/pasarela', app, pasarelaDocument);

  // Productos Swagger
  const productosConfig = new DocumentBuilder()
    .setTitle("Productos API")
    .setDescription("Documentacion de la API Productos")
    .setVersion('1.0')
    .addTag('Productos')
    .build();

  const productosDocument = SwaggerModule.createDocument(app, productosConfig, {
    include: [ProductosModule]
  });
  SwaggerModule.setup('api/productos', app, productosDocument);

  // Illustrator Swagger
  const illustratorConfig = new DocumentBuilder()
    .setTitle("Ilustradores API")
    .setDescription("Documentacion de la API Ilustradores")
    .setVersion('1.0')
    .addTag('illustrator')
    .build();

  const ilustradoresDocument = SwaggerModule.createDocument(app, illustratorConfig, {
    include: [IllustratorModule]
  });
  SwaggerModule.setup('api/ilustradores', app, ilustradoresDocument);
  
  await app.listen(3000);
}
bootstrap();
