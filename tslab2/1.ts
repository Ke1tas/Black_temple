//1
function findMin(numbers: number[]): number {
    return Math.min(...numbers);
}

const realNumbers = [3.5, 1.2, 4.6, 0.0, -2.3];
console.log("Минимальное число:", findMin(realNumbers));

function countZeros(matrix: number[][]): number {
    let zeroCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
        }
    }

    return zeroCount;
}

const myMatrix: number[][] = [
    [1, 0, 2],
    [0, 3, 0],
    [4, 5, 6],
];

console.log("Количество нулей в матрице:",countZeros(myMatrix));

//2
type StringTuple = [string, string, string];

function concatenateStrings(tuple: StringTuple): string {
    return tuple.join('');
}


const myTuple: StringTuple = ["Hello", " ", "World"];
console.log("Конкатенация строк:", concatenateStrings(myTuple));

//3
enum PrinterType {
    Inkjet = "Inkjet",
    Laser = "Laser",
    DotMatrix = "DotMatrix"
}

console.log("Тип принтера:", PrinterType.Inkjet); 

//4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function logPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}

const myDog = new Dog();
const myCat = new Cat();

logPetInfo(myDog);
logPetInfo(myCat);

//5
type Printer = {
    type: PrinterType;
    brand: string;
    model: string;
    year: number;
};

const myPrinter: Printer = {
    type: PrinterType.Laser,
    brand: "HP",
    model: "LaserJet Pro",
    year: 2021
};

console.log("Принтер в формате JSON:", JSON.stringify(myPrinter));