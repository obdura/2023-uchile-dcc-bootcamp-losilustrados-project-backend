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
