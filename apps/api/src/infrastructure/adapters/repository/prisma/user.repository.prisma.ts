import { Injectable } from '@nestjs/common';

import { User } from '~/domain/entities/user.entity';
import { UserRepository } from '~/domain/ports/user.repository';
import { UserMapper } from '~/infrastructure/mapper/user.mapper';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserRepositoryPrisma implements UserRepository {
  constructor(private prisma: PrismaService) {}

  create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  updateUser(userId: string, user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async getUser(userId): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    return UserMapper.toDomain(user);
  }
}
