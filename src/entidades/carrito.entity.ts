import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Carrito")
export class Carrito {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    total: number;

    @OneToMany(
        () => ProductosPorCarrito,
        (productoPorCarrito) => productoPorCarrito.carrito,
        { cascade: ['insert', 'update']}
    )
    productosCarrito: ProductosPorCarrito[];
}

@Entity("ProductosPorCarrito")
export class ProductosPorCarrito {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productoId: number;

    @ManyToOne(() => Carrito, (carrito) => carrito.productosCarrito)
    @JoinColumn({ name: "carritoId" })
    carrito: Carrito;
}