import { Module } from '@nestjs/common';
import { IllustratorController } from './illustrator.controller';
import { IllustratorService } from './illustrator.service';

@Module({
    controllers: [IllustratorController],
    providers: [IllustratorService]
})
export class IllustratorModule {}
