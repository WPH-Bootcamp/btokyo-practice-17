type User = { id: number; name: string; email: string; };

type UserName = Pick<User, "name" | "id">;
type UserWithoutEmail = Omit<User, "email">;
type n = Omit<User, "id">;
type m = Pick<User, "name" | "email">;