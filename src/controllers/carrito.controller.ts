import { BadRequestException, Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/decorator/roles.decorator";
import { CreateCarritoDto } from "src/dtos/create-carrito.dto";
import { Role } from "src/enum/role.enum";
import { AuthenticationGuard } from "src/guards/authentication.guard";
import { RolesGuard } from "src/guards/roles.guard";
import { CarritoService } from "src/services/carrito.service";

@ApiTags("Carrito")
@Controller("carrito")
@ApiBearerAuth('general')
@Roles(Role.Cliente)
@UseGuards(AuthenticationGuard, RolesGuard)
@ApiHeader({ name: "Authentication", description: "Token de autenticación", required: true })
export class CarritoController {
    
    constructor(
        private readonly carritoService: CarritoService
    ) {}

    @Post()
    async postCarrito(@Body() createCarritoDto: CreateCarritoDto) {
        try {
            await this.carritoService.createCarrito(createCarritoDto);
            return { 'message': 'OK' };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}