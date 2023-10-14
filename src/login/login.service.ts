import { Injectable } from "@nestjs/common";
import { Cliente } from "./usuario.interface";
import { LoginClienteDto } from './loginCliente.dto';

@Injectable()
export class LoginService {

    constructor() {
        console.log("LoginService created.");
    }

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

    obtenerClientePorEmail(email: string): Cliente {
        for(let i = 0; i < this.listaClientes.length; i++) {
            if (email === this.listaClientes[i].email) {
                return this.listaClientes[i];
            }
        }
        return null;
    }

    getListaClientes(): Cliente[] {
        return this.listaClientes;
    }
}