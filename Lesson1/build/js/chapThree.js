"use strict";
let stringArr = ['Joey', 'Amelia', 'Brook'];
let dataArr = ['Anon', 236, 'Solo'];
let allDataArr = [56, 'bobby', true];
stringArr.push('bae');
dataArr.push(123);
allDataArr = stringArr;
//dataArr[0] = false;
stringArr[1] = 'samson';
dataArr.unshift(77);
let empArr = [];
let bands = [];
bands.push('blessing');
// Tuple - must contain the types defined
let myTup = [45, 'ann', false];
let other = [56, 'clarc', true];
//myTup = other;  
other = myTup;
myTup[1] = 'glory';
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
let samplObj = {
    color: 'red',
    isNew: false
};
//samplObj.color = 22
samplObj.isNew = true;
let joan = {
    id: 1,
    name: 'jessy',
    isVerified: false,
    address: '7ezenwata',
    // favs: [1, 2, 3, 4, 5]
};
let Evelin = {
    id: 2,
    name: 'Eve',
    isVerified: false,
    address: 'chukwuogor'
};
console.log(joan);
let salut = (greet) => {
    return `Hello ${greet.name}`;
};
console.log(salut(joan));
let another = (check) => {
    if (check.address) {
        return `Your address is ${check.address.toUpperCase()}`;
    }
    return `Hello`;
};
console.log(another(Evelin));
