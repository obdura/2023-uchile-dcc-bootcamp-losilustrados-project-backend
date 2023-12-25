import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductoDto } from "src/dtos/create-producto.dto";
import { Producto } from "src/entidades/producto.entity";
import { Between, In, Repository } from "typeorm";
import { ProductoMapper } from "src/mappers/producto.mapper";
import { ProductoDto } from "src/dtos/producto.dto";
import { UpdateProductoDto } from "src/dtos/update-producto.dto";
import { Inventario } from "src/entidades/inventario.entity";
import { CategoriaMapper } from "src/mappers/categoria.mapper";
import { IlustracionMapper } from "src/mappers/ilustracion.mapper";
import { MarcaMapper } from "src/mappers/marca.mapper";
import { ProveedorMapper } from "src/mappers/proveedor.mapper";
import { RegistrarImagenProductoDto } from "src/dtos/registrar-imagen-producto.dto";
import { v4 as uuidv4 } from 'uuid';
import { ImagenProducto } from "src/entidades/productos-imagenes.entity";
import { promises as FS } from 'fs';

@Injectable()
export class ProductosService {
        
    constructor(
        @InjectRepository(Producto) private productoRepository: Repository<Producto>,
        @InjectRepository(ImagenProducto) private imageProductoRepository: Repository<ImagenProducto>
    ) {}
    
    async findAll(
        page: number,
        limit: number,
        talla: string,
        marca: string,
        ilustradorId: number[],
        oferta: boolean,
        precioMax: number,
        precioMin: number
        ): Promise<ProductoDto[]> {

        let whereConditional = {}

        if (talla) {
            whereConditional['talla'] = talla
        }

        if (marca != "") {
            whereConditional["nombreMarca"] = marca;
        }

        if (ilustradorId.length != 0) {
            whereConditional['ilustradorId'] = In(ilustradorId);
        }

        whereConditional['esOferta'] = oferta;
        if (oferta) {
            whereConditional['precioOferta'] = Between(precioMin, precioMax);
        } else {
            whereConditional['precioNormal'] = Between(precioMin, precioMax);
        } 

        console.log("where conditional:", whereConditional);

        const result = await this.productoRepository.find(
            {
                order: {
                    id: "ASC" // TODO: Recibir esto como query param.
                },
                relations: {
                    imagenes: true
                },
                where: whereConditional,
                take: limit,
                skip: (page - 1) * limit
            }
        );
        return await ProductoMapper.productoEntitiesToProductoDtoList(result);
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
            return await ProductoMapper.productoEntitiesToProductoDtoList(result);
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
            //     inventarios: true,
            //     categoria: true,
            //     marca: true,
            //     ilustracion: true,
            //     proveedor: true,
                imagenes: true
            }
        });
        if (!encontrado) {
            throw Error("No se encontró el producto");
        }
        console.log(encontrado);
        return await ProductoMapper.entityToDto(encontrado);
    }
    
    async addProducto(createProductoDto: CreateProductoDto): Promise<ProductoDto> {
        const producto: Producto = ProductoMapper.createProductoDtoToEntity(createProductoDto);
        const resultado: Producto = await this.productoRepository.save(producto);

        const idProducto = resultado.id;

        const base64Contents = [];
        const fileNames = [];

        const base64data1 = createProductoDto.img1base64;
        const fileName1 = uuidv4();
        if ( base64data1 != "") {
            base64Contents.push(base64data1);
            fileNames.push(fileName1);
        }

        const base64data2 = createProductoDto.img2base64;
        const fileName2 = uuidv4();
        if ( base64data2 != "") {
            base64Contents.push(base64data2);
            fileNames.push(fileName2);
        }

        const base64data3 = createProductoDto.img3base64;
        const fileName3 = uuidv4();
        if ( base64data3 != "") {
            base64Contents.push(base64data3);
            fileNames.push(fileName3);
        }
        // const base64Contents = [base64data1, base64data2, base64data3];
        // const fileNames = [fileName1, fileName2, fileName3];

        for (let i = 0; i < base64Contents.length; i++) {
            const buffer = Buffer.from(base64Contents[i], 'base64');
            let ruta = `${idProducto.toString()}/${fileNames[i]}.png`;
            try {
                try {
                    await FS.mkdir(`./assets/files/${idProducto.toString()}`);
                } catch (error) {
                    console.log(error.message);
                }
                await FS.writeFile('./assets/files/' + ruta, base64Contents[i], { encoding: 'base64' });
            } catch (error) {
                console.log(error);
                throw error;
            }
            let image = new ImagenProducto();
            image.nombre = fileNames[i];
            image.ruta = ruta;
            image.producto = resultado;
            await this.imageProductoRepository.save(image);
        }
        return await ProductoMapper.entityToDto(resultado);
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
        // entity.categoria = CategoriaMapper.dtoToEntity(dto.categoria);
        // entity.ilustracion = IlustracionMapper.dtoToEntity(dto.ilustracion);
        // entity.marca = MarcaMapper.dtoToEntity(dto.marca);
        // entity.proveedor = ProveedorMapper.dtoToEntity(dto.proveedor);
        entity.nombreCategoria = dto.nombreCategoria;
        entity.nombreMarca = dto.nombreMarca;
        entity.nombreProveedor = dto.nombreProveedor;
        entity.esFavorito = dto.esFavorito;
        entity.esOferta = dto.esOferta;
        entity.talla = dto.talla;
        entity.precioNormal = dto.precioNormal
        entity.precioOferta = dto.precioOferta;
        entity.condicion = dto.condicion;
        entity.material = dto.material;
        entity.medidaCadera = dto.medidaCadera;
        entity.medidaLargo = dto.medidaLargo;
        entity.medidaPecho = dto.medidaPecho;
        entity.ilustradorId = dto.ilustradorId;

        const idProducto = found.id;

        const base64Contents = [];
        const fileNames = [];

        const base64data1 = dto.img1base64;
        const fileName1 = uuidv4();
        console.log(base64data1);
        if (base64data1) {
            base64Contents.push(base64data1);
            fileNames.push(fileName1);
        }

        const base64data2 = dto.img2base64;
        const fileName2 = uuidv4();
        if (base64data2) {
            base64Contents.push(base64data2);
            fileNames.push(fileName2);
        }

        const base64data3 = dto.img3base64;
        const fileName3 = uuidv4();
        if (base64data3) {
            base64Contents.push(base64data3);
            fileNames.push(fileName3);
        }
        // const base64Contents = [base64data1, base64data2, base64data3];
        // const fileNames = [fileName1, fileName2, fileName3];

        for (let i = 0; i < base64Contents.length; i++) {
            const buffer = Buffer.from(base64Contents[i], 'base64');
            let ruta = `${idProducto.toString()}/${fileNames[i]}.png`;
            try {
                try {
                    await FS.mkdir(`./assets/files/${idProducto.toString()}`);
                } catch (error) {
                    console.log(error.message);
                }
                await FS.writeFile('./assets/files/' + ruta, base64Contents[i], { encoding: 'base64' });
            } catch (error) {
                console.log(error);
                throw error;
            }
            let image = new ImagenProducto();
            image.nombre = fileNames[i];
            image.ruta = ruta;
            image.producto = entity;
            await this.imageProductoRepository.save(image);
        }
        
        await this.productoRepository.update(id, entity);

        const updatedEntity = await this.productoRepository.findOne({
            where: {
                id: id
            }
        });
        
        return await ProductoMapper.entityToDto(updatedEntity);
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
          return await ProductoMapper.entityToDto(encontrado);
    }

    async registrarImagen(registrarImagenDto: RegistrarImagenProductoDto) {
        const idProducto = registrarImagenDto.idProducto;
        const encontrado: Producto = await this.productoRepository.findOne({
            where: {
                id: idProducto
            }
        });
        if (!encontrado) {
            throw Error("No se encontró el producto");
        }
        const base64data = registrarImagenDto.base64;
        const fileName = uuidv4();

        const buffer = Buffer.from(base64data, 'base64');
        let ruta = `./assets/files/${idProducto}/${fileName}`;
        try {
            try {
                await FS.mkdir(`./assets/files/${idProducto}`);
            } catch (error) {
                console.log(error.message);
            }
            await FS.writeFile(ruta, base64data, { encoding: 'base64' });
        } catch (error) {
            console.log(error);
            throw error;
        }

        let image = new ImagenProducto();
        image.nombre = fileName;
        image.ruta = ruta;
        image.producto = encontrado;

        await this.imageProductoRepository.save(image);
    }
}