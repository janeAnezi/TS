// Type Aliases
type strOrNum = string | number;
type strOrNumArr = (string | number)[];

type newObj = {
    name?: string,
    age: number,
    character:strOrNum
}

type users = strOrNum;

// literal types
let myName: 'Dave';
let userName: 'Dave' | 'Frank' | 'John';
userName = 'Frank';

// functions 
const add = (a:number,b:number): number => {
    return a + b;
}

const logMsg = (msg: any): void => {
    console.log(msg);
    
}

logMsg('Welcome!!!')
logMsg(add(3,7))