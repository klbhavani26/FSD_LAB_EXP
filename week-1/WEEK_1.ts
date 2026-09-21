// Combined TypeScript Program

// 1. Simple Types
let age: number = 20;
let name: string = "Bhavani";
let isStudent: boolean = true;

console.log("=== Simple Types ===");
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Student:", isStudent);


// 2. Special Types (any, unknown, void)
console.log("\n=== Special Types ===");

// any
let data: any = 100;
console.log("Any (number):", data);

data = "Now I am a string";
console.log("Any (string):", data);

// unknown
let value: unknown = "TypeScript Example";

if (typeof value === "string") {
    console.log("Unknown (length):", value.length);
}

// void
function greet(): void {
    console.log("Hello from void function");
}

greet();


// 3. Compile Check Message
console.log("\n=== Compile & Run Check ===");
let message: string = "TypeScript compiled and running successfully!";
console.log(message);


// 4. Type Annotations
console.log("\n=== Type Annotations ===");

function add(a: number, b: number): number {
    return a + b;
}

function printDetails(personName: string, personAge: number): void {
    console.log(`Name: ${personName}, Age: ${personAge}`);
}

let result: number = add(5, 10);
console.log("Sum:", result);

printDetails("Bhavani", 20);