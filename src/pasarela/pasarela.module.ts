import { Module } from '@nestjs/common';
import { PasarelaController } from './pasarela.controller';

@Module({
    controllers: [PasarelaController]
})
export class PasarelaModule {}
