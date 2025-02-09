let isRightColor: boolean;
let day: string;
let acc: number;
let stat: any;
let album: string | number; // union type
let postId: string | number;
let isActive: number | boolean;

let regex: RegExp = /\w+/g;

isRightColor = true;
day = "Monday";
acc = 0.5;
stat = "hello";
album = 123; // 'joey'


console.log(`${stat} ${day} ${acc} ${isRightColor} of everything.`);

let sum = (a:number, b:number) => {
    return a + b;
}