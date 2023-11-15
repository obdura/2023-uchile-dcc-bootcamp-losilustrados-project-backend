import { Module } from '@nestjs/common';
import { IllustratorController } from './illustrator.controller';
import { IllustratorService } from './illustrator.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [IllustratorController],
    providers: [IllustratorService],
    imports: [SharedModule]
})
export class IllustratorModule {}
