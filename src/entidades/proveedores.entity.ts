import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Proveedores" })
export class Proveedor {
    
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
}