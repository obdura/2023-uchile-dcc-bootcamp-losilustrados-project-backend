import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from './clientes.service';
import { Cliente } from 'src/entidades/cliente.entity';

@Injectable()
export class LoginService {

    constructor(
        private clienteService: ClientesService,
        private jwtService: JwtService
    ) { }

    async login(username: string, password: string) {
        const cliente: Cliente = await this.clienteService.findOne(username);
        if(cliente.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = {
            id: cliente.id,
            username: cliente.email
        };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    
}