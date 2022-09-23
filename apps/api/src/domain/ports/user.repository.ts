import { User } from '../entities/user.entity';

export interface UserRepository {
  getUser(userId: string): Promise<User>;

  updateUser(userId: string, user: User): Promise<User>;

  create(user: User): Promise<User>;
}
