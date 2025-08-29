type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type fungsiD = (a: string, b: number[]) => string;
// const implement: fungsiD = (a, b) => '20';

type A = GetReturnType<() => number>; // number
type B = GetReturnType<(a: string) => boolean>; // boolean
type C = GetReturnType<() => void>;
type D = GetReturnType<fungsiD>;

const a: A = 20;
const b: B = true;
const c: C = undefined;
const d: D = '10';
