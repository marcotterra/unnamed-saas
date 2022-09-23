import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from '~/application/application.module';
import { UserController } from './adapters/controllers/user.controller';
import { PrismaModule } from './adapters/repository/prisma.module';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class InfrastructureModule {
  static forRoot(): DynamicModule {
    return {
      module: InfrastructureModule,
      imports: [ApplicationModule, PrismaModule],
      controllers: [UserController],
    };
  }
}
