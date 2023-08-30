import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    name(): string {
        return "<h1>Login</h1>"
    } 
}
