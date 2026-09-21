```javascriptgit clone
const express = require("express");

const server = express();
const PORT = 3000;

// Middleware to read form data
server.use(express.urlencoded({ extended: true }));

// Display registration page
server.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Registration</title>
        </head>

        <body>
            <h1>Student Registration Portal</h1>

            <h2>Student Information</h2>
            <p><strong>Name:</strong> Tejaswi</p>
            <p><strong>Department:</strong> Computer Science</p>
            <p><strong>Academic Year:</strong> Second Year</p>

            <hr>

            <h2>Register Here</h2>

            <form action="/register" method="POST">

                <label for="studentName">Name:</label>
                <input type="text" id="studentName" name="studentName">
                <br><br>

                <label for="studentEmail">Email:</label>
                <input type="email" id="studentEmail" name="studentEmail">
                <br><br>

                <label for="studentAge">Age:</label>
                <input type="number" id="studentAge" name="studentAge">
                <br><br>

                <input type="submit" value="Register">

            </form>
        </body>
        </html>
    `);
});

// Process submitted registration form
server.post("/register", (req, res) => {

    const { studentName, studentEmail, studentAge } = req.body;
    const validationErrors = [];

    // Name validation
    if (!studentName || studentName.trim().length === 0) {
        validationErrors.push("Please enter your name.");
    }

    // Email validation
    if (!studentEmail || !studentEmail.includes("@")) {
        validationErrors.push("Please enter a valid email address.");
    }

    // Age validation
    const age = Number(studentAge);

    if (!studentAge || Number.isNaN(age) || age < 18) {
        validationErrors.push("Student age must be 18 or above.");
    }

    // Display validation errors
    if (validationErrors.length > 0) {

        const errorList = validationErrors
            .map(item => `<li>${item}</li>`)
            .join("");

        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Registration Error</title>
            </head>

            <body>
                <h1>Registration Failed</h1>

                <h3>Please correct the following errors:</h3>

                <ul>
                    ${errorList}
                </ul>

                <a href="/">Return to Registration Page</a>
            </body>
            </html>
        `);

        return;
    }

    // Display successful registration
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Complete</title>
        </head>

        <body>
            <h1>Registration Successful!</h1>

            <h2>Submitted Details</h2>

            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>Email:</strong> ${studentEmail}</p>
            <p><strong>Age:</strong> ${age}</p>

            <p>Your registration has been submitted successfully.</p>

            <a href="/">Register Another Student</a>
        </body>
        </html>
    `);
});

// Start the Express server
server.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${PORT}`);
});
```
