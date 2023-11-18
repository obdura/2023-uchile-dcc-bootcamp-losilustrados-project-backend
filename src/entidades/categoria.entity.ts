import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./producto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "Categorias" })
export class Categoria {

    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos: Producto[];
}