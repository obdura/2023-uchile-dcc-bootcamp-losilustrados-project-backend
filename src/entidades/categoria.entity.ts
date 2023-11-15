import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Categorias" })
export class Categoria {

    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
}