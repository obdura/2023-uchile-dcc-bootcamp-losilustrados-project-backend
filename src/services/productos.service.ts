import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { Repository } from "typeorm";
import { ProductoMapper } from "src/mappers/Producto.mapper";
import { ProductoDto } from "src/dtos/producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { Inventario } from "src/entidades/inventario.entity";

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
        );
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
        );
            return ProductoMapper.productoEntitiesToProductoDtoList(result);
        }

        //MC

        async findAllByMarcaId(marcaId: number): Promise<Producto[]> {
            return this.productoRepository.find({
             // where: { marca: { id: marcaId } },
             where:{
                idMarca:marcaId
             }
            });
          }
/*
        async findByMarcaId(page: number, limit: number, marcaID: number): Promise<ProductoDto[]> {
            const result = await this.productoRepository.find(
                {
                    where:{
                        marca: { id: marcaID }
                    },
                    order: {
                        id: "ASC"
                    },
                    
                        // TODO: Recibir esto como query param.
                    
                    take: limit,
                    skip: (page - 1) * limit
                }
            );
                return ProductoMapper.productoEntitiesToProductoDtoList(result);
            }

            async findRecienLlegados(page: number, limit: number, recien: boolean): Promise<ProductoDto[]> {
                const result = await this.productoRepository.exist(
                    {
                        where:{
                            recienLlegado: recien
                        },
                       if (!existe) {
                        throw Error("No hay recien productos llegados");
                     }
                 const result = await this.productoRepository.find(
                {
                    where:{
                        recienLlegado: recien
                    },
                    order: {
                        id: "ASC"
                    },
            return ProductoMapper.productoEntitiesToProductoDtoList(result);
            }
                        
                        take: limit,
                        skip: (page - 1) * limit
                    }
                );
                    return ProductoMapper.productoEntitiesToProductoDtoList(result);
                }
*/
        //MC

    async findProducto(id: number) {
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
                id: id
            },
            relations: {
                inventario: true
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
    
    async deleteProducto(id: number): Promise<ProductoDto> {
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
              id: id
            }
          });
          if (!encontrado) {
            throw Error("No se encontró el producto");
          }
          await this.productoRepository.remove(encontrado);
          return ProductoMapper.productoEntityToDto(encontrado);
    }
}