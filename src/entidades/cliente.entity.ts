import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Clientes" })
export class Cliente {

    @PrimaryColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
}