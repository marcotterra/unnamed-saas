import { User } from '~/domain/entities/user.entity';
import { User as UserEntity } from '@prisma/client';

export class UserMapper {
  public static toDomain(userEntity: UserEntity): User {
    const user = new User({
      id: userEntity.id.toString(),
      name: userEntity.name,
    });

    return user;
  }

  public static toDomains(usersEntity: UserEntity[]): User[] {
    const users = new Array<User>();

    usersEntity.forEach((userEntity) => {
      const user = this.toDomain(userEntity);
      users.push(user);
    });

    return users;
  }
}
