import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { Repository } from "typeorm";
import { ProductoMapper } from "src/mappers/Producto.mapper";
import { ProductoDto } from "src/dtos/producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";

@Injectable()
export class ProductosService {
        
    constructor(
        @InjectRepository(Producto) private productoRepository: Repository<Producto>
    ) {}

    async findAll(page: number, limit: number): Promise<ProductoDto[]> {
        const result = await this.productoRepository.find(
            {
                order: {
                    id: "ASC" // TODO: Recibir esto como query param.
                },
                take: limit,
                skip: (page - 1) * limit
            }
        )
        return ProductoMapper.productoEntitiesToProductoDtoList(result);
    }
    
    async findByCategoriaId(page: number, limit: number, categoriaId: number): Promise<ProductoDto[]> {
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
            return ProductoMapper.productoEntitiesToProductoDtoList(result);
        }

    async findProducto(id: number) {
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
                id: id
            }
        });

        if (!encontrado) {
            throw Error("No se encontró el producto");
        }

        return ProductoMapper.productoEntityToDto(encontrado);
    }
        
    async addProducto(createProductoDto: CreateProductoDto): Promise<ProductoDto> {
        const producto: ProductoDto = ProductoMapper.createProductoDtoToEntity(createProductoDto);
        const resultado: Producto = await this.productoRepository.save(producto);
        return ProductoMapper.productoEntityToDto(resultado);
    }

    async updateProducto(id: number, updateProductoDto: UpdateProductoDto): Promise<ProductoDto> {
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
                id: id 
            }
        });

        if (!encontrado) {
            throw Error("No se encontró el producto");
        }

        const resultado: Producto = await this.productoRepository.save({
            ...encontrado,
            ...updateProductoDto
        });

        return ProductoMapper.productoEntityToDto(resultado);
    }
}