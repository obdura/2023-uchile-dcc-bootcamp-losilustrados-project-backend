import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "Inventario" })
export class Inventario {

    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Producto )
    @JoinColumn({ name: "id_producto" })
    idProducto: number;
    
    @Column()
    talla: string;

    @Column()
    cantidad: number;
}