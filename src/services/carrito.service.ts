import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCarritoDto } from "src/dtos/create-carrito.dto";
import { UpdateCarritoDto } from "src/dtos/update-carrito.dto";
import { Carrito, ProductosPorCarrito } from "src/entidades/carrito.entity";
import { Cliente } from "src/entidades/cliente.entity";
import { Producto } from "src/entidades/producto.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class CarritoService {
    
    constructor(
        @InjectRepository(Carrito) private carritoRepository: Repository<Carrito>,
        @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
        @InjectRepository(Producto) private productoRepository: Repository<Producto>,
        @InjectRepository(ProductosPorCarrito) private productoPorCarritoRepo: Repository<ProductosPorCarrito>
        ) {}
        
        async createCarrito(dto: CreateCarritoDto) {
            const cliente = await this.clienteRepository.findOne({
                where: {
                    email: dto.user,
                }
            });
            
            if (!cliente) {
                throw Error("Cliente no existe");
        }
        
        // Obtiene los productos desde las ids del dto.
        // Esto para sólo registrar las ids cuyos productos existen.
        const productos = await this.productoRepository.find({
            where: {
                id: In(dto.productList)
            }
        });
        const productosId: number[] = productos.map((producto) => producto.id);
        
        let productosPorCarrito: ProductosPorCarrito[] = [];
        for (let i=0; i<productosId.length; i++) {
            let productoPorCarrito = new ProductosPorCarrito(); 
            productoPorCarrito.productoId = productosId[i];
            productosPorCarrito.push(productoPorCarrito);
        }
        
        let carrito = new Carrito();
        carrito.user = dto.user;
        carrito.total = dto.total;
        carrito.productosCarrito = productosPorCarrito;
        
        await this.carritoRepository.save(carrito);
    }
    
    async updateCarrito(dto: UpdateCarritoDto) {
        const cliente = await this.clienteRepository.findOne({
            where: {
                email: dto.user,
            }
        });
        
        if (!cliente) {
            throw Error("Cliente no existe");
        }

        const carrito = await this.carritoRepository.findOne({
            where: {
                user: dto.user
            },
            relations: {
                productosCarrito: true
            }
        });
        
        // Obtiene los productos desde las ids del dto.
        // Esto para sólo registrar las ids cuyos productos existen.
        // const productos = await this.productoRepository.find({
        //     where: {
        //         id: In(dto.productList)
        //     },
        // });
        // const productosId: number[] = productos.map((producto) => producto.id);
        
        // let productosPorCarrito: ProductosPorCarrito[] = [];
        // for (let i=0; i<productosId.length; i++) {
        //     let productoPorCarrito = new ProductosPorCarrito(); 
        //     productoPorCarrito.productoId = productosId[i];
        //     productosPorCarrito.push(productoPorCarrito);
        // }

        //const productosId = carrito.productosCarrito.map((prod) => prod.productoId);
        
        const productos: Producto[] = await this.productoRepository.find({
            where: {
                id: In(dto.productList)
            }
        });
        const productosId: number[] = productos.map((producto) => producto.id);
        let productosPorCarrito: ProductosPorCarrito[] = [];
        for (let i=0; i<productosId.length; i++) {
            let productoPorCarrito = new ProductosPorCarrito(); 
            productoPorCarrito.productoId = productosId[i];
            productosPorCarrito.push(productoPorCarrito);
        }

        //carrito.user = dto.user;
        carrito.total = dto.total;
        carrito.productosCarrito = productosPorCarrito;
        
        //await this.carritoRepository.update(carrito.id, carrito);
        await this.carritoRepository.save(carrito);
    }
}