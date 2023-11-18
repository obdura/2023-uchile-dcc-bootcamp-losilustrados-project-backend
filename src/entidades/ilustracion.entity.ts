import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Ilustraciones" })
export class Ilustracion {

    @PrimaryColumn()
    id: number;
}