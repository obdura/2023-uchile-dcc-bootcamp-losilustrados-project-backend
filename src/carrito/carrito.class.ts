import { Cliente } from "src/login/usuario.interface";
import { Producto } from "src/productos/producto.class";

export class Carrito {
    private cliente: Cliente;
    private listadoProductos: Producto[] = [];

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    agregarProducto(producto: Producto) {
        this.listadoProductos.push(producto);
    }

    getEmailCliente(): string {
        return this.cliente.email;
    }

    getListadoProductos(): Producto[] {
        return this.listadoProductos;
    }
}