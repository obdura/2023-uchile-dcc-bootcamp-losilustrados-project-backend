import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Producto } from "src/entidades/producto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductosService {

    constructor(
        @InjectRepository(Producto) private productoRepository: Repository<Producto>
    ) {}

    async findAll(page: number, limit: number) {
        const result = await this.productoRepository.find(
            {
                order: {
                    id: "ASC" // TODO: Recibir esto como query param.
                },
                take: limit,
                skip: (page - 1) * limit
            }
        )
        return result;
    }

    async findByCategoriaId(page: number, limit: number, categoriaId: number) {
        const result = await this.productoRepository.find(
            {
                where: {
                    idCategoria: categoriaId
                },
                order: {
                    id: "ASC" // TODO: Recibir esto como query param.
                },
                take: limit,
                skip: (page - 1) * limit
            }
        )
        return result;
    }
}