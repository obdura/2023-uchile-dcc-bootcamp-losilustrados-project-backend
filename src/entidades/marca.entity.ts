import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Marcas" })
export class Marca {
    
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
}