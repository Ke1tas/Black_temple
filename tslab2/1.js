//1
function findMin(numbers) {
    return Math.min(...numbers);
}
const realNumbers = [3.5, 1.2, 4.6, 0.0, -2.3];
console.log("Минимальное число:", findMin(realNumbers));
function countZeros(matrix) {
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
const myMatrix = [
    [1, 0, 2],
    [0, 3, 0],
    [4, 5, 6],
];
console.log("Количество нулей в матрице:", countZeros(myMatrix));
function concatenateStrings(tuple) {
    return tuple.join('');
}
const myTuple = ["Hello", " ", "World"];
console.log("Конкатенация строк:", concatenateStrings(myTuple));
//3
var PrinterType;
(function (PrinterType) {
    PrinterType["Inkjet"] = "Inkjet";
    PrinterType["Laser"] = "Laser";
    PrinterType["DotMatrix"] = "DotMatrix";
})(PrinterType || (PrinterType = {}));
console.log("Тип принтера:", PrinterType.Inkjet);
//4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function logPetInfo(pet) {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}
const myDog = new Dog();
const myCat = new Cat();
logPetInfo(myDog);
logPetInfo(myCat);
const myPrinter = {
    type: PrinterType.Laser,
    brand: "HP",
    model: "LaserJet Pro",
    year: 2021
};
console.log("Принтер в формате JSON:", JSON.stringify(myPrinter));
