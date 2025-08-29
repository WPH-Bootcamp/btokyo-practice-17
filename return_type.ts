function add(a: number, b: number): number {
  return a + b;
}

function gabung(a: string, b: number): string {
    return `${a} ${b}`
}

type A = ReturnType<typeof add>; // number
type B = Parameters<typeof add>; // [number, number]
type C = ReturnType<typeof gabung>;
type D = Parameters<typeof gabung>;

const angka: A = 20;
const array: B = [10,20];
const hasilArray: number = add(10,30);

console.log(angka);
console.log(array);
console.log(hasilArray);
