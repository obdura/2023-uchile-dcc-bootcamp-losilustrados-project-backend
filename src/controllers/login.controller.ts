import { Body, Controller, Get, Headers, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { LoginDto } from "src/dtos/login.dto";
import { LoginService } from "src/services/login.service";

@ApiTags("Login")
@Controller("/login")
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) {}
    
    // @Get("/:username/:password")
    // async login(@Param("username") username: string, @Param("password") password: string): Promise<any> {
    //     const token = await this.loginService.login(username, password);
    //     return token;
    // }

    @Post("")
    async login(@Body() loginDto: LoginDto) {
        const token = await this.loginService.login(loginDto);
        return token;
    }
    
}
