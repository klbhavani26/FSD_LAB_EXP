// WEEK 3 - OOP Concepts in TypeScript

class Student {

    // Public Property
    public name: string;

    // Private Property
    private age: number;

    // Protected Property
    protected course: string;

    // Readonly Property
    readonly country: string = "India";

    // Static Property
    static college: string = "Sri Vishnu Engineering College";

    // Constructor
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    displayDetails(): void {
        console.log("Name      :", this.name);
        console.log("Age       :", this.age);
        console.log("Course    :", this.course);
        console.log("Country   :", this.country);
        console.log("College   :", Student.college);
    }
}

// Inheritance
class Result extends Student {

    marks: number;

    constructor(name: string, age: number, course: string, marks: number) {
        super(name, age, course);
        this.marks = marks;
    }

    displayResult(): void {
        console.log("Student Name :", this.name);
        console.log("Course       :", this.course);
        console.log("Marks        :", this.marks);
    }
}

// Object Creation
let s1 = new Result("Sandeep", 20, "CSE", 95);

console.log("----- Student Details -----");
s1.displayDetails();

console.log();

console.log("----- Student Result -----");
s1.displayResult();