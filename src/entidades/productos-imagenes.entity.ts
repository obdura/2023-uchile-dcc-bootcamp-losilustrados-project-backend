import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "ImagenesProductos" })
export class ImagenProducto {

  @PrimaryColumn({ name: "id"})
  id: number;

  @Column({ name: "nombre"})
  nombre: string;

  @Column({ name: "ruta"})
  ruta: string;

  @Column({ name: "id_producto" })
  idProducto: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: "id_producto"})
  producto: Producto;

}