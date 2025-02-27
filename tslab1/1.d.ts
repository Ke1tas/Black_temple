declare const concat_strings: (str1: string, str2: string, str3: string) => string;
declare const result: string;
declare const numberValue: number;
declare let stringValue: string;
declare const booleanValue: boolean;
declare let arrayValue: Array<number>;
declare const nullValue: null;
declare let undefinedValue: undefined;
declare const objectValue: object;
declare const symbolValue: symbol;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
declare const data: ToJsonStringify;
declare const json_info: string;
