//1
const concat_strings = (str1:string, str2:string, str3:string) => `${str1} ${str2} ${str3}`;


const result = concat_strings("12 ", " 23", "44 5!");
console.log(result); 

//2
const numberValue:number = 42; // число
let stringValue:string = "Текстовая строка"; // строка
const booleanValue:boolean = true; // булевый тип
let arrayValue:Array<number> = [1, 2, 3, 4, 5]; // массив
const nullValue:null = null; // null
let undefinedValue:undefined; // undefined
const objectValue:object = { name: "Объект", age: 30 }; // объект
const symbolValue:symbol = Symbol("символ"); // символ

//3
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}

    const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}

const json_info = JSON.stringify(data);
console.log(json_info);