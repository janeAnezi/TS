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
