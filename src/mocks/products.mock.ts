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
    'Marca1',
    'polera'
);

const producto2: Producto = new Producto(
    uuid(),
    'Polera 2',
    'Esta es una polera',
    'L',
    10000,
    true,
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
    'Marca1',
    'polera'
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
    'Marca1',
    'polera'
);

const producto4: Producto = new Producto(
    uuid(),
    'Polera 4',
    'Esta es una polera',
    'M',
    8000,
    true,
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
    'Marca1',
    'polera'
);

const producto5: Producto = new Producto(
    uuid(),
    'Chaqueta 1',
    'Esta es una chaqueta',
    'XL',
    18000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'cuero'
    ],
    illustratorMock1,
    'Marca2',
    'chaqueta'
);

const producto6: Producto = new Producto(
    uuid(),
    'Jeans 1',
    'Esta es un jeans',
    'S',
    30000,
    true,
    false,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'algodon',
        'elastano'
    ],
    illustratorMock1,
    'Marca2',
    'jeans'
);

const producto7: Producto = new Producto(
    uuid(),
    'vestido 1',
    'Esta es un vestido',
    'L',
    40000,
    false,
    false,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'poliester'
    ],
    illustratorMock1,
    'Marca3',
    'vestido'
);

const producto8: Producto = new Producto(
    uuid(),
    'Zapatillas',
    'Esta es un par de zapatillas',
    '38',
    40000,
    true,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'Cuero'
    ],
    illustratorMock1,
    'Marca4',
    'zapatillas'
);

const producto9: Producto = new Producto(
    uuid(),
    'Zapatillas',
    'Esta es un par de zapatillas',
    '40',
    45000,
    false,
    true,
    '',
    [
        '',
    ],
    'nuevo',
    [
        'Cuero'
    ],
    illustratorMock1,
    'Marca3',
    'zapatillas'
);

export const productosMock: Producto[] = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
];
