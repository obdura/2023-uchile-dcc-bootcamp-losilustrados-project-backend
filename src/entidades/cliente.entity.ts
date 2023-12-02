import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { RegistroCarrito } from "./registro-carrito.entity";

@Entity({ name: "Clientes" })
export class Cliente {

    @PrimaryColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => RegistroCarrito, (registroCarrito) => registroCarrito.cliente)
    registrosCarrito: RegistroCarrito[];
}