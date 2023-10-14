import { Injectable } from '@nestjs/common';
import { Carrito } from './carrito.class';
import { Cliente } from 'src/login/usuario.interface';
import { Producto } from 'src/productos/producto.class';

@Injectable()
export class CarritoService {

    constructor() {
        console.log("CarritoService created.");
    }

    private listaCarritos: Carrito[] = [];

    crearCarrito(cliente: Cliente) {
        for(let i = 0; i < this.listaCarritos.length; i++) {
            if (this.listaCarritos[i].getEmailCliente() == cliente.email) {
                return {
                    mensaje: "Carrito ya existe."
                };
            }
        }
        this.listaCarritos.push(new Carrito(cliente));
        return {
            mensaje: "Carrito creado exitosamente."
        };
    }

    agregarProductoCarrito(cliente: Cliente, producto: Producto) {
        for(let i=0; i<this.listaCarritos.length; i++) {
            if (this.listaCarritos[i].getEmailCliente() == cliente.email) {
                this.listaCarritos[i].agregarProducto(producto);
                break;
            }
        }
    }

    obtenerListadoProductosDelCarritoDelCliente(cliente: Cliente) {
        for(let i = 0; i < this.listaCarritos.length; i++) {
            if (this.listaCarritos[i].getEmailCliente() == cliente.email) {
                return this.listaCarritos[i].getListadoProductos();
            }
        }
        return {
            mensaje: "Carrito no existe"
        };
    }

}