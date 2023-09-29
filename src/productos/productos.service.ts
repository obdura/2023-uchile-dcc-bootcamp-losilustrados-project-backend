import { productosMock } from "src/mocks/products.mock";
import { Producto } from "./producto.class";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private listaProductos: Producto[] = productosMock;

    findAll(): Producto[] {
        return this.listaProductos;
    }

    findProductosOfertas(): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.isOffer;
            }
        )
    }

    findProductosRecienLlegados(): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.newArrival;
            }
        )
    }

    findProductoByUUID(uuid: string): Producto {
        for (const producto of this.listaProductos) {
            if(producto.uuid == uuid) {
                return producto;
            }
        }
        return null;
    }
}