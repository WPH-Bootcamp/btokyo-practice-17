type User = { id: number; name?: string; };

type UserPartial = Partial<User>;   // { id?: number; name?: string; }
type UserMandatory = Required<User>;  // { id: number; name: string; }

const user: User = {
    id: 20,
    name: 'Hello'
}

const userPartial: UserPartial = {
    name: 'Fauzi'
}

const userMandatory: UserMandatory = {
    id: 20,
    name: 'Rizky'
}