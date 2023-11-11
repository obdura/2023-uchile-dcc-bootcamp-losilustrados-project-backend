import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'Productos' })
export class Producto {

    @PrimaryColumn()
    id: number;

    @Column()
    precio: number;

    @Column({ name: "id_categoria" })
    idCategoria: number;

    @Column({ name: "id_marca" })
    idMarca: number;

    @Column({ name: "id_ilustracion" })
    idIlustracion: number;

    @Column({ name: "id_proveedor" })
    idProveedor: number;
}