import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { Repository } from "typeorm";
import { ProductoMapper } from "src/mappers/Producto.mapper";
import { ProductoDto } from "src/dtos/producto.dto";

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

    async addProducto(createProductoDto: CreateProductoDto): Promise<ProductoDto> {
        const producto: ProductoDto = ProductoMapper.createProductoDtoToEntity(createProductoDto);
        const resultado: Producto = await this.productoRepository.save(producto);
        return ProductoMapper.productoEntityToDto(resultado);
    }
}