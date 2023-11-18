USE neotaller;

INSERT INTO Artistas (nombre, apellido, url_imagen_perfil)
VALUES 
('Vicente', 'Van Gogh', 'url1'),
('Juan', 'Picasso', 'url2'),
('Dalí', 'Reyes', 'url3'),
('David', 'Vinci', 'url4'),
('Jaime', 'Monet', 'url5');

INSERT INTO Categorias (nombre)
VALUES
('Poleras'),
('Pantalones'),
('Camisas'),
('Polerones'),
('Vestidos');

INSERT INTO Clientes (email, password)
VALUES
('email1@gmail.com', 'clave123'),
('email2@gmail.com', 'clave123'),
('email3@gmail.com', 'clave123'),
('email4@gmail.com', 'clave123'),
('email5@gmail.com', 'clave123');

INSERT INTO Cupones (descuento, fecha_desde_vigencia, fecha_hasta_vigencia)
VALUES
(10, '2023-10-31', '2023-11-01'),
(11, '2023-10-31', '2023-11-02'),
(12, '2023-10-31', '2023-11-03'),
(13, '2023-10-31', '2023-11-04'),
(14, '2023-10-31', '2023-11-05');

INSERT INTO Direcciones (calle, numero, comuna, ciudad, region)
VALUES 
('calle 1', 123, 'La Florida', 'Santiago', 'RM'),
('calle 2', 123, 'La Granja', 'Santiago', 'RM'),
('calle 3', 123, 'La Pintana', 'Santiago', 'RM'),
('calle 4', 123, 'Puente Alto', 'Santiago', 'RM'),
('calle 5', 123, 'Las Condes', 'Santiago', 'RM');

INSERT INTO Ilustraciones (id_artista, fecha_creacion)
VALUES (1, '2023-10-31'), 
(2, '2023-10-31'), 
(3, '2023-10-31'), 
(4, '2023-10-31'), 
(5, '2023-10-31');

INSERT INTO Proveedores (nombre)
VALUES ('Importadora A'), ('Importadora B'), ('Importadora C'), ('Importadora D'), ('Importadora E');

INSERT INTO Marcas (nombre, id_proveedor)
VALUES
('Adidas', 1),
('Mossimo', 2),
('Arrow', 3),
('Gildan', 4),
('Champions', 5);

INSERT INTO Productos (precio, recien_llegado, id_categoria, id_marca, id_ilustracion, id_proveedor, descripcion, nombre)
VALUES
(10000, True, 1, 5, 1, 1, 'polera blanca de algodon', 'polera'),
(12000, True, 2, 4, 2, 2, 'pantalon jeans azul', 'pantalon'),
(20000, True, 3, 3, 3, 2, 'chaqueta cuero negro', 'chaqueta'),
(40000, False, 4, 2, 4, 4, 'polera algodon roja', 'polera'),
(50000, False, 5, 1, 5, 1, 'vestido floreado', 'vestido');

INSERT INTO RepartoComuna (comuna)
VALUES ('Santiago'), ('Estacion Central'), ('La Florida'), ('Pedro Aguirre Cerda'), ('Quilicura');

INSERT INTO Telefonos (id_cliente, numero_telefono, es_celular)
VALUES
(1, '56975344443', True),
(2, '56975344444', True),
(3, '56275344423', False),
(4, '56275344422', False),
(2, '56975344421', True);

INSERT INTO Pedidos (id_cliente, id_direccion, id_reparto_comuna, medio_pago)
VALUES
(1, 1, 1, 'Efectivo'),
(1, 3, 2, 'Tarjeta Credito'),
(3, 4, 3, 'Cheque'),
(2, 2, 4, 'Tarjeta Debito'),
(1, 1, 5, 'Webpay');

INSERT INTO DetallePedidos (id_pedido, id_producto, cantidad)
VALUES 
(1, 1, 10),
(1, 2, 3),
(2, 4, 2),
(2, 5, 3),
(3, 5, 15);

INSERT INTO Comprobantes (id_pedido, id_cliente)
VALUES
(1, 1),
(2, 3),
(3, 4),
(4, 2),
(5, 1);

INSERT INTO Boletas (id_pedido, id_cliente, fecha_creacion)
VALUES
(1, 1, '2023-10-31'),
(2, 3, '2023-10-30'),
(3, 4, '2023-10-29'),
(4, 2, '2023-10-28'),
(5, 1, '2023-10-27');

INSERT INTO DireccionesPorCliente (id_cliente, id_direccion)
VALUES
(1, 5),
(2, 4),
(3, 3),
(4, 2),
(5, 1);

INSERT INTO Favoritos (id_producto, id_cliente, fecha_creacion)
VALUES
(1, 1, '2023-10-10'),
(2, 2, '2023-10-11'),
(2, 1, '2023-10-12'),
(3, 2, '2023-10-10'),
(5, 3, '2023-10-10');

INSERT INTO Inventario (id_producto, talla, cantidad)
VALUES
(1, 'XL', 100),
(2, 'M', 100),
(1, 'S', 200),
(3, 'L', 150),
(4, 'L', 100);

INSERT INTO Ofertas (id_producto, porcentaje_descuento)
VALUES
(1, 10),
(2, 5),
(3, 2),
(4, 3),
(5, 15);

INSERT INTO OrdenTrabajo (fecha_creacion, id_pedido)
VALUES
('2023-10-30', 1),
('2023-10-31', 2),
('2023-11-01', 3),
('2023-11-02', 4),
('2023-11-02', 5);

INSERT INTO Transacciones (id_cliente, id_pedido, fecha_transaccion, fecha_creacion)
VALUES
(1, 1, '2023-10-31', '2023-10-31'),
(2, 2, '2023-10-30', '2023-10-30'),
(2, 3, '2023-10-30', '2023-10-30'),
(1, 4, '2023-10-29', '2023-10-29'),
(1, 5, '2023-10-28', '2023-10-28');

INSERT INTO Carrito (id_producto, id_cliente, talla, cantidad)
VALUES 
(1, 1, 'XL', 2),
(1, 2, 'XL', 2),
(1, 3, 'XL', 2),
(1, 4, 'XL', 2),
(1, 5, 'XL', 2);
