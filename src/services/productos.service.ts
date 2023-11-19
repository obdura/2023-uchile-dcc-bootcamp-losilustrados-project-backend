import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { Repository } from "typeorm";
import { ProductoMapper } from "src/mappers/producto.mapper";
import { ProductoDto } from "src/dtos/producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { Inventario } from "src/entidades/inventario.entity";
import { CategoriaMapper } from "src/mappers/categoria.mapper";
import { IlustracionMapper } from "src/mappers/ilustracion.mapper";
import { MarcaMapper } from "src/mappers/marca.mapper";
import { ProveedorMapper } from "src/mappers/proveedor.mapper";

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
                    categoria: {
                        id: categoriaId
                    }
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
                marca: {
                    id: marcaId
                }
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

    async findProducto(id: number) : Promise<ProductoDto> {
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
                id: id
            },
            relations: {
                inventarios: true,
                categoria: true,
                marca: true,
                ilustracion: true,
                proveedor: true
            }
        });
        if (!encontrado) {
            throw Error("No se encontró el producto");
        }
        console.log(encontrado);
        return ProductoMapper.entityToDto(encontrado);
    }
    
    async addProducto(createProductoDto: CreateProductoDto): Promise<ProductoDto> {
        const producto: ProductoDto = ProductoMapper.createProductoDtoToEntity(createProductoDto);
        const resultado: Producto = await this.productoRepository.save(producto);
        return ProductoMapper.entityToDto(resultado);
    }
    
    async updateProducto(id: number, dto: UpdateProductoDto): Promise<ProductoDto> {
        const found: Producto = await this.productoRepository.findOne({
            where: {
                id: id 
            }
        });

        if (!found) {
            throw Error("No se encontró el producto");
        }

        let entity: Producto = new Producto();
        entity.nombre = dto.nombre;
        entity.precio = dto.precio;
        entity.descripcion = dto.descripcion
        entity.categoria = CategoriaMapper.dtoToEntity(dto.categoria);
        entity.ilustracion = IlustracionMapper.dtoToEntity(dto.ilustracion);
        entity.marca = MarcaMapper.dtoToEntity(dto.marca);
        entity.proveedor = ProveedorMapper.dtoToEntity(dto.proveedor);
        
        await this.productoRepository.update(id, entity);

        const updatedEntity = await this.productoRepository.findOne({
            where: {
                id: id
            }
        });
        
        return ProductoMapper.entityToDto(updatedEntity);
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
          return ProductoMapper.entityToDto(encontrado);
    }
}