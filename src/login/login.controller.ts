import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cliente } from './usuario.interface';
import { LoginService } from './login.service';
import { LoginClienteDto } from './loginCliente.dto';

@ApiTags("Login")
@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) {}

    @Get()
    name(): string {
        return "<h1>Login</h1>"
    }

    @Post('/registrar-cliente')
    registrarCliente(@Body() cliente: Cliente) {
        this.loginService.insertCliente(cliente);
        return {
            mensaje: "OK"
        };
    }

    @Post('login')
    loginCliente(@Body() loginClienteDto: LoginClienteDto) {
        return this.loginService.autenticarCliente(loginClienteDto);
    }

    @Get('clientes')
    listaClientes(): Cliente[] {
        return this.loginService.getListaClientes();
    }
}
