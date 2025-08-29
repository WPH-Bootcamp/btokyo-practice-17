type IsStudent<T> = T extends "student" ? "Diskon 50%" : "Bayar normal";

type Student = IsStudent<"student">; // "Diskon 50%"
type Teacher = IsStudent<"teacher">; // "Bayar normal"

const a: Student = 'Diskon 50%';
const b: Teacher = 'Bayar normal';