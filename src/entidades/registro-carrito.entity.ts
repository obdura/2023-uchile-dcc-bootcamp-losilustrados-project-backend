import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Cliente } from "./cliente.entity";

@Entity({ name: "RegistroCarrito" })
export class RegistroCarrito {

    @PrimaryColumn()
    id: number

    @ManyToOne(() => Producto, (producto) => producto.registrosCarrito)
    @JoinColumn({ name: "id_producto" })
    producto: Producto;

    @ManyToOne(() => Cliente, (cliente) => cliente.registrosCarrito)
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;

    @Column()
    cantidad: number;

    @Column()
    talla: string;
}