import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Marca } from "./marca.entity";
import { Ilustracion } from "./ilustracion.entity";
import { Proveedor } from "./proveedores.entity";
import { Inventario } from "./inventario.entity";

@Entity({ name: 'Productos' })
export class Producto {

    @PrimaryColumn()
    id: number;

    @Column()
    precio: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "id_categoria" })
    idCategoria: number;

    //@ManyToOne(() => Marca)
    @Column({ name: "id_marca" })
    idMarca: number;

    @ManyToOne(() => Ilustracion)
    @JoinColumn({ name: "id_ilustracion" })
    idIlustracion: number;

    @ManyToOne(() => Proveedor)
    @JoinColumn({ name: "id_proveedor" })
    idProveedor: number;

    @Column()
    descripcion: string;

    @Column()
    nombre: string;


    @OneToMany(() => Inventario, (entidad) => entidad.idProducto)
    inventario: Inventario[];

   // @ManyToOne(() => Marca, marca => marca.productos)
    //marca: Marca;

}