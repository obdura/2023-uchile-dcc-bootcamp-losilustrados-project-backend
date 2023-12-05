import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authentication'];
        if (!token) {
            console.log("No hay token");
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token, {
                    secret: "CLAVE123"
                }
            )
            request['INFO'] = payload;
        } catch (error) {
            console.log(error.message);
            throw new UnauthorizedException();
        }
        return true;
    }
}