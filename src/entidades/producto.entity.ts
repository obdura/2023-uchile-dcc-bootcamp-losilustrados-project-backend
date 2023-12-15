import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Marca } from "./marca.entity";
import { Ilustracion } from "./ilustracion.entity";
import { Proveedor } from "./proveedores.entity";
import { Inventario } from "./inventario.entity";
import { RegistroCarrito } from "./registro-carrito.entity";
import { ImagenProducto } from "./productos-imagenes.entity";

@Entity({ name: 'Productos' })
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    precio: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.productos)
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria;

    @ManyToOne(() => Marca, (marca) => marca.productos)
    @JoinColumn({ name: "id_marca" })
    marca: Marca;

    @ManyToOne(() => Ilustracion)
    @JoinColumn({ name: "id_ilustracion" })
    ilustracion: Ilustracion;

    @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
    @JoinColumn({ name: "id_proveedor" })
    proveedor: Proveedor;

    @Column()
    nombreCategoria: string;

    @Column()
    nombreMarca: string;

    @Column()
    nombreProveedor: string;

    @Column()
    descripcion: string;

    @Column()
    nombre: string;

    @OneToMany(() => Inventario, (inventario) => inventario.producto)
    inventarios: Inventario[];

   // @ManyToOne(() => Marca, marca => marca.productos)
    //marca: Marca;

    @OneToMany(() => RegistroCarrito, (registroCarrito) => registroCarrito.producto)
    registrosCarrito: RegistroCarrito[];

    @OneToMany(() => ImagenProducto, (imagen) => imagen.producto)
    imagenes: ImagenProducto[];

}