type P = Promise<string>;
type A = Awaited<P>; // string

type Contoh = (a: number, b: number) => Promise<string>;

const funcContoh: Contoh = (a, b) => {
  // Hit API
  const result: Promise<string> = new Promise((resolve, reject) => resolve('Hello'));
  return result;
};

type ResultContoh = ReturnType<typeof funcContoh>;
type ResolveResultContoh = Awaited<ResultContoh>;

const hasil: ResolveResultContoh = "A";
