import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [ProductosController],
    //providers: [ProductosService]
    imports: [SharedModule]
})
export class ProductosModule {}
