import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "Inventario" })
export class Inventario {

    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Producto, (producto) => producto.inventarios)
    @JoinColumn({ name: "id_producto" })
    producto: Producto;
    
    @Column()
    talla: string;

    @Column()
    cantidad: number;
}