import { Module } from '@nestjs/common';
import { CarritoController } from './carrito.controller';

@Module({
    controllers: [CarritoController]
})
export class CarritoModule {}
