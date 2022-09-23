import { Module } from '@nestjs/common';
import { DomainModule } from '~/domain/domain.module';
import { PrismaModule } from '~/infrastructure/adapters/repository/prisma.module';
import { UserRepositoryPrisma } from '~/infrastructure/adapters/repository/prisma/user.repository.prisma';
import { UserService } from './services/user.service';

@Module({
  imports: [DomainModule, PrismaModule],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryPrisma,
    },
  ],
  exports: [UserService],
})
export class ApplicationModule {}
