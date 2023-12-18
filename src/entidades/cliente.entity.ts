import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { RegistroCarrito } from "./registro-carrito.entity";
import { Role } from "src/enum/role.enum";

@Entity({ name: "Clientes" })
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => RegistroCarrito, (registroCarrito) => registroCarrito.cliente)
    registrosCarrito: RegistroCarrito[];
    
    @Column()
    nombres: string;

    @Column()
    apellidos: string;
    
    @Column()
    telefono: string;
    
    @Column()
    direccionDespacho: string;
    
    @Column()
    numeroDepartamentoDespacho?: number;
    
    @Column()
    comunaDespacho: string;
    
    @Column()
    regionDespacho: string;

    @Column()
    direccionFacturacion: string;
    
    @Column()
    numeroDepartamentoFacturacion?: number;

    @Column()
    comunaFacturacion: string;

    @Column()
    regionFacturacion: string;

    @Column()
    rol: Role;
}