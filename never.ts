type RemoveString<T> = T extends string ? never : T;
type RemoveNumber<T> = T extends number ? never : T;
type Custom = {
    hello: string;
};
type FirstType = string | number | boolean | Custom; 
const hasilPertama: FirstType = 20;

type Result = RemoveNumber<FirstType>;
// Hasil: number | boolean
const hasil2: Result = 'Hello';
