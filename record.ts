type CustomData = {
    name: string;
}
type Score = Record<"math" | "english" | "science", number> &
  Record<"art", number>;
// type Score = {
//     math: number,
//     english: number,
//     science: number,
// }

const score: Score = { math: 20, english: 30, science: 20, art: 50 };
