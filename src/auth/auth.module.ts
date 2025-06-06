import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (ConfigService: ConfigService)=> ({
      global: true,
      secret: ConfigService.get<string>('JWT_SECRET'),
      signOptions: {expiresIn: '15d'} // pour 15 Jour
    })
  })
],
  controllers: [AuthController],
  providers: [AuthService, UsersService]
})
export class AuthModule {}
