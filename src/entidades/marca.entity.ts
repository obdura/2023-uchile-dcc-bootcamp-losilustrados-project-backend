import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: "Marcas" })
export class Marca {
    
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
    
   

   // @OneToMany(() => Producto, producto => producto.marca)
  //productos: Producto[];
}