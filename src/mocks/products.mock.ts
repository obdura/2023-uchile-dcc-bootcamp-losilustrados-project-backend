import { v4 as uuid } from 'uuid';
import { Producto } from "src/productos/producto.class";
import { illustratorMock1 } from "./illustrators.mock";

const producto1: Producto = new Producto(
    uuid(),
    'Polera 1',
    'Esta es una polera',
    'XL',
    15000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'algodon'
    ],
    illustratorMock1,
    'Marca1'
);

const producto2: Producto = new Producto(
    uuid(),
    'Polera 2',
    'Esta es una polera',
    'L',
    10000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'algodon'
    ],
    illustratorMock1,
    'Marca1'
);

const producto3: Producto = new Producto(
    uuid(),
    'Polera 3',
    'Esta es una polera',
    'S',
    5000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'algodon'
    ],
    illustratorMock1,
    'Marca1'
);

const producto4: Producto = new Producto(
    uuid(),
    'Polera 4',
    'Esta es una polera',
    'M',
    8000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'algodon'
    ],
    illustratorMock1,
    'Marca1'
);


export const productosMock: Producto[] = [
    producto1,
    producto2,
    producto3,
    producto4,
];
/*
[
    new Producto(1, 'Vestido 1', 'Vestido floreado', 10000, 'url', true, true),
    new Producto(2, 'Vestido 2', 'Vestido rojo', 20000, 'url', true, false),
    new Producto(3, 'Vestido 3', 'Vestido azul', 30000, 'url', false, false),
    new Producto(4, 'Vestido 4', 'Vestido amarillo', 40000, 'url', false, true),
    new Producto(5, 'Pantalon 1', 'Es un pantalon gris', 10000, 'url', true, false),
    new Producto(6, 'Pantalon 2', 'Es un pantalon de jeans', 14000, 'url', true, false),
    new Producto(7, 'Polera 1', 'Es una polera con estampado', 16000, 'url', false, true),
    new Producto(8, 'Polera 2', 'Es una polera con estampado', 18000, 'url', false, true),
    new Producto(9, 'Polera 3', 'Es una polera con estampado', 11000, 'url', false, true),
    new Producto(10, 'Polera 4', 'Es una polera con estampado', 13000, 'url', true, false),
    new Producto(11, 'Polera 5', 'Es una polera con estampado', 15000, 'url', true, false),
    new Producto(12, 'Cinturon 1', 'Cinturon de cuero', 5000, 'url', false, false),
    new Producto(13, 'Cinturon 2', 'Cinturon de cuero', 20000, 'url', true, false),
    new Producto(14, 'Short 1', 'Short veraniego', 15000, 'url', true, false),
    new Producto(15, 'Short 2', 'Short veraniego', 16000, 'url', false, true),
]
*/
