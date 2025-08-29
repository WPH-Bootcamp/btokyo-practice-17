type User = { id: number; name: string; };
type ReadonlyUser = Readonly<User>;

const u: ReadonlyUser = { id: 1, name: "Fauzi" };
// u.name = "Budi"; // ❌ Error

