import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/ports/user.repository';

@Injectable({})
export class UserService {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async create(name: string): Promise<User> {
    const user = new User({ name });

    const response = await this.userRepository.create(user);

    return response;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.getUser(id);

    return user;
  }
}
