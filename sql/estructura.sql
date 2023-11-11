DROP DATABASE neotaller;
CREATE DATABASE neotaller;
USE neotaller;

CREATE TABLE `Productos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `precio` integer,
  `recien_llegado` bool,
  `id_categoria` integer,
  `id_marca` integer,
  `id_ilustracion` integer,
  `id_proveedor` integer,
  `descripcion` varchar(1000)
);

CREATE TABLE `Categorias` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255)
);

CREATE TABLE `Ofertas` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `porcentaje_descuento` integer
);

CREATE TABLE `Inventario` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `talla` varchar(50),
  `cantidad` integer
);

CREATE TABLE `Artistas` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `apellido` varchar(255),
  `url_imagen_perfil` varchar(500)
);

CREATE TABLE `Ilustraciones` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_artista` integer,
  `fecha_creacion` datetime
);

CREATE TABLE `Marcas` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `id_proveedor` integer
);

CREATE TABLE `Clientes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `Pedidos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_cliente` integer,
  `id_direccion` integer,
  `id_reparto_comuna` integer,
  `fecha_creacion` datetime,
  `medio_pago` varchar(255)
);

CREATE TABLE `DetallePedidos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_pedido` integer,
  `id_producto` integer,
  `cantidad` integer
);

CREATE TABLE `Boletas` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_pedido` integer,
  `id_cliente` integer,
  `fecha_creacion` datetime
);

CREATE TABLE `Comprobantes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_pedido` integer,
  `id_cliente` integer
);

CREATE TABLE `Direcciones` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `calle` varchar(255),
  `numero` varchar(10),
  `numero_departamento` varchar(10),
  `comuna` varchar(255),
  `ciudad` varchar(255),
  `provincia` varchar(255),
  `region` varchar(255),
  `codigo_postal` integer
);

CREATE TABLE `DireccionesPorCliente` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_cliente` integer,
  `id_direccion` integer
);

CREATE TABLE `Favoritos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `id_cliente` integer,
  `fecha_creacion` datetime
);

CREATE TABLE `Telefonos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_cliente` integer,
  `numero_telefono` varchar(20),
  `es_celular` boolean
);

CREATE TABLE `Transacciones` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_cliente` integer,
  `id_pedido` integer,
  `fecha_transaccion` datetime,
  `fecha_creacion` datetime
);

CREATE TABLE `Cupones` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `descuento` integer,
  `fecha_desde_vigencia` datetime,
  `fecha_hasta_vigencia` datetime,
  `id_cliente` integer
);

CREATE TABLE `RepartoComuna` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `fecha_creacion` datetime,
  `comuna` varchar(255)
);

CREATE TABLE `OrdenTrabajo` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `fecha_creacion` datetime,
  `id_pedido` integer
);

CREATE TABLE `Proveedores` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255)
);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `DetallePedidos` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `Boletas` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `Comprobantes` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `DireccionesPorCliente` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `DireccionesPorCliente` ADD FOREIGN KEY (`id_direccion`) REFERENCES `Direcciones` (`id`);

ALTER TABLE `Favoritos` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Favoritos` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Boletas` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Telefonos` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Comprobantes` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Transacciones` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Cupones` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id_direccion`) REFERENCES `Direcciones` (`id`);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id_reparto_comuna`) REFERENCES `RepartoComuna` (`id`);

ALTER TABLE `OrdenTrabajo` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `Transacciones` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `Ilustraciones` ADD FOREIGN KEY (`id_artista`) REFERENCES `Artistas` (`id`);

ALTER TABLE `Inventario` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_categoria`) REFERENCES `Categorias` (`id`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_ilustracion`) REFERENCES `Ilustraciones` (`id`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedores` (`id`);

ALTER TABLE `DetallePedidos` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_marca`) REFERENCES `Marcas` (`id`);

ALTER TABLE `Ofertas` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Marcas` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedores` (`id`);