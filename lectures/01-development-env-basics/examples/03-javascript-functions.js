//**Functions - Building Blocks of Test Automation**

// Your first "Hello World" function
function sayHello() {
    console.log('Hello, QA Automation World!');
}

// Call the function
sayHello();

// Function with parameters (more useful for testing)
function greetTester(name) {
    console.log('Hello, ' + name + '! Ready to test?');
}

greetTester('Sarah');
greetTester('John');

// Function that returns a value
function createTestUser(name, email) {
    return {
        username: name,
        email: email,
        role: 'tester'
    };
}

let testUser = createTestUser('john_doe', 'john@example.com');
console.log('Created test user:', testUser);

//**Function Examples for Testing Context:**
// Function to generate test data
function generateTestEmail() {
    let timestamp = Date.now();
    return `test${timestamp}@example.com`;
}

// Function to validate expected results
function validateLoginSuccess(actualMessage) {
    let expectedMessage = 'Login successful';
    return actualMessage === expectedMessage;
}

// Using our functions
let email = generateTestEmail();
console.log('Generated email:', email);

let isValid = validateLoginSuccess('Login successful');
console.log('Login validation passed:', isValid);