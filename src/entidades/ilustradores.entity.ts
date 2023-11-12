import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'Artistas' })
export class Ilustrador {

    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;
    
    @Column({ name: "url_imagen_perfil" })
    urlImagenPerfil: string;
}