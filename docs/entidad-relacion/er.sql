CREATE TABLE `Productos` (
  `id` uuid PRIMARY KEY,
  `precio` number,
  `recien_llegado` bool,
  `id_categoria` uuid,
  `id_marca` uuid,
  `id_ilustracion` uuid,
  `id_proveedor` uuid
);

CREATE TABLE `Categorias` (
  `id` uuid PRIMARY KEY,
  `nombre` string
);

CREATE TABLE `Ofertas` (
  `id` uuid PRIMARY KEY,
  `id_producto` uuid,
  `porcentaje_descuento` number
);

CREATE TABLE `Inventario` (
  `id` uuid PRIMARY KEY,
  `id_producto` uuid,
  `talla` string,
  `cantidad` number
);

CREATE TABLE `Artistas` (
  `id` uuid PRIMARY KEY,
  `url_imagen_perfil` string
);

CREATE TABLE `Ilustraciones` (
  `id` uuid PRIMARY KEY,
  `id_artista` uuid,
  `fecha_creacion` datetime
);

CREATE TABLE `Marcas` (
  `id` uuid PRIMARY KEY,
  `nombre` string,
  `id_proveedor` uuid
);

CREATE TABLE `Clientes` (
  `id` uuid PRIMARY KEY,
  `email` string,
  `password` string
);

CREATE TABLE `Pedidos` (
  `id` uuid PRIMARY KEY,
  `id_cliente` uuid,
  `id_direccion` uuid,
  `id_reparto_comuna` uuid,
  `fecha_creacion` datetime,
  `medio_pago` string
);

CREATE TABLE `DetallePedidos` (
  `id` uuid PRIMARY KEY,
  `id_pedido` uuid,
  `id_producto` uuid,
  `cantidad` number
);

CREATE TABLE `Boletas` (
  `id` uuid PRIMARY KEY,
  `id_pedido` uuid,
  `id_cliente` uuid,
  `fecha_creacion` datetime
);

CREATE TABLE `Comprobantes` (
  `id` uuid PRIMARY KEY,
  `id_pedido` uuid,
  `id_cliente` uuid
);

CREATE TABLE `Direcciones` (
  `id` uuid PRIMARY KEY,
  `calle` string,
  `numero` string,
  `numero_departamento` string,
  `comuna` string,
  `ciudad` string,
  `provincia` string,
  `region` string,
  `codigo_postal` number
);

CREATE TABLE `DireccionesPorCliente` (
  `id` uuid PRIMARY KEY,
  `id_cliente` uuid,
  `id_direccion` uuid
);

CREATE TABLE `Favoritos` (
  `id` uuid PRIMARY KEY,
  `id_producto` uuid,
  `id_cliente` uuid,
  `fecha_creacion` datetime
);

CREATE TABLE `Telefonos` (
  `id` uuid PRIMARY KEY,
  `id_cliente` uuid,
  `numero_telefono` number,
  `es_celular` boolean
);

CREATE TABLE `Transacciones` (
  `id` uuid PRIMARY KEY,
  `id_cliente` uuid,
  `id_pedido` uuid,
  `fecha_transaccion` datetime,
  `fecha_creacion` datetime
);

CREATE TABLE `Cupones` (
  `id` uuid PRIMARY KEY,
  `descuento` integer,
  `fecha_desde_vigencia` datetime,
  `fecha_hasta_vigencia` datetime,
  `id_cliente` uuid
);

CREATE TABLE `RepartoComuna` (
  `id` uuid PRIMARY KEY,
  `fecha_creacion` datetime,
  `comuna` string
);

CREATE TABLE `OrdenTrabajo` (
  `id` uuid PRIMARY KEY,
  `fecha_creacion` datetime,
  `id_pedido` uuid
);

CREATE TABLE `Proveedores` (
  `id` uuid PRIMARY KEY,
  `nombre` string
);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `DetallePedidos` ADD FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos` (`id`);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id`) REFERENCES `Boletas` (`id_pedido`);

ALTER TABLE `Pedidos` ADD FOREIGN KEY (`id`) REFERENCES `Comprobantes` (`id_pedido`);

ALTER TABLE `DireccionesPorCliente` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `DireccionesPorCliente` ADD FOREIGN KEY (`id_direccion`) REFERENCES `Direcciones` (`id`);

ALTER TABLE `Favoritos` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Favoritos` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Boletas` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`);

ALTER TABLE `Clientes` ADD FOREIGN KEY (`id`) REFERENCES `Telefonos` (`id_cliente`);

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

ALTER TABLE `Ilustraciones` ADD FOREIGN KEY (`id`) REFERENCES `Productos` (`id_ilustracion`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedores` (`id`);

ALTER TABLE `DetallePedidos` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_marca`) REFERENCES `Marcas` (`id`);

ALTER TABLE `Ofertas` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`);

ALTER TABLE `Marcas` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedores` (`id`);
