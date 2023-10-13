import { Injectable } from "@nestjs/common";
import { Cliente } from "./usuario.interface";
import { LoginClienteDto } from './loginCliente.dto';

@Injectable()
export class LoginService {

    private listaClientes: Cliente[] = [];

    insertCliente(cliente: Cliente) {
        this.listaClientes.push(cliente);
    }

    autenticarCliente(loginClienteDto: LoginClienteDto) {
        let autenticado: boolean = false;
        this.listaClientes.forEach((cliente) => {
            if (cliente.email == loginClienteDto.email) {
                if (cliente.password == loginClienteDto.password) {
                    autenticado = true;
                }
            }
        })
        
        if(autenticado) {
            return {
                mensaje: "OK"
            };
        }
        return {
            mensaje: "NOK"
        };
    }
}