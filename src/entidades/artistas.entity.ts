import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Artistas"})
export class Artista {

    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ name: "url_imagen_perfil" })
    urlImagenPerfil: string;
}