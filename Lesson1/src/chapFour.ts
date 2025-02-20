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

