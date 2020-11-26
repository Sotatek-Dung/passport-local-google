import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    UsersModule,
    AuthModule,
  ],
})

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
