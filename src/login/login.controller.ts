import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Login")
@Controller('login')
export class LoginController {
    @Get()
    name(): string {
        return "<h1>Login</h1>"
    } 
}
