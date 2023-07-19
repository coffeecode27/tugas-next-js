import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'output/entities/Regions';
import { Users } from 'output/entities/Users';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { LocalGuard } from 'src/auth/local/local.guard';
import { UploadMulter } from 'src/multer/multer';
import { RegionsController } from 'src/regions/regions.controller';
import { RegionsService } from 'src/regions/regions.service';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Regions, Users]),
    MulterModule.register(UploadMulter.MulterOption()),
    PassportModule,
    JwtModule.register({
      secret: 'naufal',
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [RegionsService, UserService, LocalGuard, JwtGuard],
  controllers: [RegionsController, UserController],
  exports: [UserService],
})
export class GlobalModule {}
