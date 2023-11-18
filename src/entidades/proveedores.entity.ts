import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "Proveedores" })
export class Proveedor {
    
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Producto, (producto) => producto.proveedor)
    productos: Producto[];
}