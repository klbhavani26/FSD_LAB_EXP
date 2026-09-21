// WEEK 4 - Namespace, Modules and Generics

// Namespace
namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

// Using Namespace
console.log("Addition       :", Calculator.add(10, 20));
console.log("Subtraction    :", Calculator.subtract(20, 5));
console.log("Multiplication :", Calculator.multiply(5, 6));

// Generic Variable
let numbers: Array<number> = [10, 20, 30, 40];
let names: Array<string> = ["Sandeep", "Rahul", "Anjali"];

console.log();
console.log("Numbers :", numbers);
console.log("Names   :", names);

// Generic Function
function display<T>(value: T): T {
    return value;
}

console.log();
console.log(display<number>(100));
console.log(display<string>("TypeScript"));
console.log(display<boolean>(true));

// Generic Constraint
interface Length {
    length: number;
}

function printLength<T extends Length>(item: T): void {
    console.log("Length :", item.length);
}

printLength("Programming");
printLength([10, 20, 30, 40]);

// Export and Import Modules

/*
Create file: math.ts

export function square(x:number):number{
    return x*x;
}

export function cube(x:number):number{
    return x*x*x;
}

----------------------------------

Create file: app.ts

import {square,cube} from "./math";

console.log(square(5));
console.log(cube(5));

Compile:

tsc math.ts
tsc app.ts

Run:

node app.js
*/