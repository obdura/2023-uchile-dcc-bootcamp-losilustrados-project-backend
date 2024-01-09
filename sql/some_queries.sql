use neotaller;
CREATE TABLE IF NOT EXISTS `Clientes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  nombres varchar(1024),
  apellidos varchar(1024),
  telefono varchar(100),
  direccionDespacho varchar(1024),
  numeroDepartamentoDespacho integer,
  comunaDespacho varchar(1024),
  regionDespacho varchar(1024),
  direccionFacturacion varchar(1024),
  numeroDepartamentoFacturacion integer,
  comunaFacturacion varchar(1024),
  regionFacturacion varchar(1024),  
);

alter table Clientes
add column nombres varchar(1024),
add column  apellidos varchar(1024),
add column  telefono varchar(100),
add column  direccionDespacho varchar(1024),
add column numeroDepartamentoDespacho integer,
add column comunaDespacho varchar(1024),
add column regionDespacho varchar(1024),
add column direccionFacturacion varchar(1024),
add column numeroDepartamentoFacturacion integer,
add column comunaFacturacion varchar(1024),
add column regionFacturacion varchar(1024);

select * from Clientes;

use neotaller;
alter table Productos
add column nombreCategoria varchar(255),
add column nombreMarca varchar(255),
add column nombreProveedor varchar(255);

select * from Productos;

select * from ImagenesProductos;


alter table Clientes
add column rol varchar(100);

select * from Clientes;

use neotaller;
alter table Productos
add column esFavorito boolean,
add column talla varchar(255),
add column precioNormal varchar(100),
add column esOferta boolean,
add column precioOferta varchar(100),
add column condicion varchar(255),
add column material varchar(255),
add column medidaCadera integer,
add column medidaPecho integer,
add column medidaLargo integer,
add column ilustradorId integer,
add column thumbnail varchar(500);

ALTER TABLE Productos MODIFY precioOferta INTEGER;
ALTER TABLE Productos MODIFY precioNormal INTEGER;

select * from Productos;
select * from ImagenesProductos;

select * from Clientes;
select * from Productos;

create table Carrito (
	id int primary key AUTO_INCREMENT,
    `user` varchar(255),
    total int
);

create table ProductosPorCarrito (
	id int primary key auto_increment,
    productoId int,
    carritoId int,
    foreign key (carritoId) references Carrito(id)
);

select * from ProductosPorCarrito;
select * from Carrito;

ALTER TABLE `DetallePedidos`
DROP FOREIGN KEY `DetallePedidos_ibfk_2`;
ALTER TABLE `DetallePedidos`
ADD CONSTRAINT `DetallePedidos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`) ON DELETE SET NULL;
ALTER TABLE `DetallePedidos`
DROP FOREIGN KEY `DetallePedidos_ibfk_1`;
ALTER TABLE `DetallePedidos`
ADD CONSTRAINT `DetallePedidos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`) ON DELETE SET NULL;
ALTER TABLE `Favoritos`
DROP FOREIGN KEY `Favoritos_ibfk_1`;
ALTER TABLE `Favoritos`
ADD CONSTRAINT `Favoritos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`) ON DELETE SET NULL;
ALTER TABLE `Inventario`
DROP FOREIGN KEY `Inventario_ibfk_1`;
ALTER TABLE `Inventario`
ADD CONSTRAINT `Inventario_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`) ON DELETE SET NULL;
ALTER TABLE `Ofertas`
DROP FOREIGN KEY `Ofertas_ibfk_1`;
ALTER TABLE `Ofertas`
ADD CONSTRAINT `Ofertas_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id`) ON DELETE SET NULL;