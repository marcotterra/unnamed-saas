interface UserProps {
  id?: string;
  name: string;
}

export class User {
  public id: string;
  public name: string;

  constructor(user: UserProps) {
    this.id = user?.id ?? null;
    this.name = user.name;
  }

  public getId(): string {
    return this.id;
  }
}
