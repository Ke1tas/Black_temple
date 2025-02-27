//1
const concat_strings = (str1, str2, str3) => `${str1} ${str2} ${str3}`;
const result = concat_strings("12 ", " 23", "44 5!");
console.log(result);
//2
const numberValue = 42; // число
let stringValue = "Текстовая строка"; // строка
const booleanValue = true; // булевый тип
let arrayValue = [1, 2, 3, 4, 5]; // массив
const nullValue = null; // null
let undefinedValue; // undefined
const objectValue = { name: "Объект", age: 30 }; // объект
const symbolValue = Symbol("символ"); // символ
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const json_info = JSON.stringify(data);
console.log(json_info);
