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

    findProductsBySize(size: string): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.size.toUpperCase() == size.toUpperCase();
            }
        )
    }

    findProductByArtista(uuid: string): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.illustrator.uuid == uuid;
            }
        )
    }

    findAllCategories(): string[] {
        let categories: Set<string> = new Set<string>();
        for (const producto of this.listaProductos) {
            categories.add(producto.category.toUpperCase());
        }
        return Array.from(categories.values());
    }

    findProductsByCategory(category: string): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.category.toUpperCase() == category.toUpperCase();
            }
        )
    }

    findAllBrands(): string[] {
        let brands: Set<string> = new Set<string>();
        for (const producto of this.listaProductos) {
            brands.add(producto.brand.toUpperCase());
        }
        return Array.from(brands.values());
    }

    findProductsByBrand(brand: string): Producto[] {
        return this.listaProductos.filter(
            (producto) => {
                return producto.brand.toUpperCase() == brand.toUpperCase();
            }
        )
    }
}