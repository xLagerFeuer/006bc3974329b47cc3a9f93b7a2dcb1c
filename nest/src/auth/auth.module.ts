import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@user/user.module';
import { options } from './config';
import { GUARDS } from '@auth/guards';
import { HttpModule } from '@nestjs/axios';
import { STRATEGIES } from '@auth/strategies';

@Module({
    imports: [PassportModule, JwtModule.registerAsync(options()), UserModule, HttpModule],
    providers: [AuthService, ...STRATEGIES, ...GUARDS],
    controllers: [AuthController],
})
export class AuthModule {
}
