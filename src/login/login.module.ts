import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [LoginController],
    //providers: [LoginService]
    imports: [SharedModule]
})
export class LoginModule {}
