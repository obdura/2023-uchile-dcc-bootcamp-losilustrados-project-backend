import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "Ilustraciones" })
export class Ilustracion {

    @PrimaryColumn()
    id: number;

    @OneToMany(() => Producto, (producto) => producto.ilustracion)
    productos: Producto[];
}