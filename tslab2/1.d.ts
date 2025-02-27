declare function findMin(numbers: number[]): number;
declare const realNumbers: number[];
declare function countZeros(matrix: number[][]): number;
declare const myMatrix: number[][];
type StringTuple = [string, string, string];
declare function concatenateStrings(tuple: StringTuple): string;
declare const myTuple: StringTuple;
declare enum PrinterType {
    Inkjet = "Inkjet",
    Laser = "Laser",
    DotMatrix = "DotMatrix"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function logPetInfo<T extends Pet>(pet: T): void;
declare const myDog: Dog;
declare const myCat: Cat;
type Printer = {
    type: PrinterType;
    brand: string;
    model: string;
    year: number;
};
declare const myPrinter: Printer;
