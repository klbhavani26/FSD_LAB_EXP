// Week 2 Lab Program

// Function with types
function add(a: number, b: number): number {
    return a + b;
}

// Optional parameter
function greet(name: string, city?: string): void {
    if (city) {
        console.log("Hello " + name + " from " + city);
    } else {
        console.log("Hello " + name);
    }
}

// Default parameter
function student(name: string, age: number = 18): void {
    console.log("Student:", name);
    console.log("Age:", age);
}

// Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};

// REST parameter
function findSum(...numbers: number[]): number {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log("Addition =", add(10, 20));

greet("Sandeep");
greet("Sandeep", "Vijayawada");

student("Rahul");
student("Anjali", 21);

console.log("Multiplication =", multiply(5, 6));

console.log("REST Sum =", findSum(10, 20, 30, 40, 50));