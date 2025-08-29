type GetArrayItem<T> = T extends (infer U)[] ? U : T;
type Custom = number[];

type A = GetArrayItem<string[]>; // string
type B = GetArrayItem<number>;   // number
type C = GetArrayItem<Custom>; 
