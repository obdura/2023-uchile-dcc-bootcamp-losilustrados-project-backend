import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { AddProductoCarritoDto } from "src/dtos/add-producto-carrito.dto";
import { RegistroCarritoDto } from "src/dtos/registro-carrito.dto";
import { Cliente } from "src/entidades/cliente.entity";
import { Inventario } from "src/entidades/inventario.entity";
import { RegistroCarrito } from "src/entidades/registro-carrito.entity";
import { ProductoMapper } from "src/mappers/producto.mapper";
import { RegistroCarritoMapper } from "src/mappers/registro-carrito.mapper";
import { Repository } from "typeorm";

@Injectable()
export class RegistroCarritoService {
    
    constructor(
        @InjectRepository(RegistroCarrito) private registroCarritoRepository: Repository<RegistroCarrito>,
        @InjectRepository(Inventario) private inventarioRepository: Repository<Inventario>,
        @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>
    ) {}
    
    async findCarritoCliente(id: number): Promise<RegistroCarritoDto[]> {
        const results: RegistroCarrito[] = await this.registroCarritoRepository.find({
            where: {
                cliente: {
                    id: id
                }
            },
            relations: {
                producto: true
            }            
        })
        if(!results) {
            throw Error("Cliente no registra elementos en el carrito");
        }
        
        return await RegistroCarritoMapper.entitiesToDto(results);
    }

    async add(dto: AddProductoCarritoDto): Promise<RegistroCarritoDto[]> {

        const cliente: Cliente = await this.clienteRepository.findOne({
            where: {
                id: dto.idCliente
            }
        });

        if(!cliente) {
            throw Error("Cliente no encontrado");
        }

        const inventario: Inventario = await this.inventarioRepository.findOne({
            where: {
                producto: {
                    id: dto.producto.id,
                },
                talla: dto.talla
            }
        })
        
        if(!inventario) {
            throw Error("No se encontró inventario para ese producto");
        }

        if(inventario.cantidad < dto.cantidad) {
            throw Error("La cantidad solicitada excede el inventario de ese producto.");
        }

        const registro: RegistroCarrito = await this.registroCarritoRepository.findOne({
            where: {
                producto: {
                    id: dto.producto.id
                },
                cliente: {
                    id: dto.idCliente
                }
            }
        });
        
        if(registro) {
            registro.cantidad += dto.cantidad;
            await this.registroCarritoRepository.update(registro.id, registro);
            
            inventario.cantidad -= dto.cantidad;
            await this.inventarioRepository.update(inventario.id, inventario);

            const carrito: RegistroCarrito[] = await this.registroCarritoRepository.find({
                where: {
                    cliente: {
                        id: dto.idCliente
                    }
                }
            })
            return await RegistroCarritoMapper.entitiesToDto(carrito);
        }
        let nuevo: RegistroCarrito = new RegistroCarrito();
        nuevo.cantidad = dto.cantidad;
        nuevo.cliente = cliente;
        nuevo.producto = inventario.producto;
        nuevo.talla = dto.talla;
        await this.registroCarritoRepository.save(nuevo);
        
        const carrito: RegistroCarrito[] = await this.registroCarritoRepository.find({
            where: {
                cliente: {
                    id: dto.idCliente
                }
            }
        })
        return await RegistroCarritoMapper.entitiesToDto(carrito);
    }
}