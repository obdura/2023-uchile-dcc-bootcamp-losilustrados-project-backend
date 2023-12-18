import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from './clientes.service';
import { Cliente } from 'src/entidades/cliente.entity';
import { LoginDto } from 'src/dtos/login.dto';

@Injectable()
export class LoginService {

    constructor(
        private clienteService: ClientesService,
        private jwtService: JwtService
    ) { }

    // async login(username: string, password: string) {
    //     const cliente: Cliente = await this.clienteService.findOne(username);
    //     if(cliente.password !== password) {
    //         throw new UnauthorizedException();
    //     }
    //     const payload = {
    //         id: cliente.id,
    //         username: cliente.email
    //     };
    //     return {
    //         access_token: await this.jwtService.signAsync(payload)
    //     };
    // }

    async login(loginDto: LoginDto) {
        const cliente: Cliente = await this.clienteService.findOne(loginDto.username);
        if(cliente.password !== loginDto.password) {
            throw new UnauthorizedException();
        }
        const payload = {
            id: cliente.id,
            username: cliente.email,
            nombres: cliente.nombres,
            apellidos: cliente.apellidos,
            telefono: cliente.telefono,
            direccionDespacho: cliente.direccionDespacho,
            numeroDepartamentoDespacho: cliente.numeroDepartamentoDespacho,
            comunaDespacho: cliente.comunaDespacho,
            regionDespacho: cliente.regionDespacho,
            direccionFacturacion: cliente.direccionFacturacion,
            numeroDepartamentoFacturacion: cliente.numeroDepartamentoFacturacion,
            comunaFacturacion: cliente.comunaFacturacion,
            regionFacturacion: cliente.regionFacturacion,
            rol: cliente.rol
        }
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    
}