//**JavaScript Variables & Data Types for Testing**

// Variables for test data
let userName = 'testuser@example.com';
let password = 'SecurePassword123';
let expectedWelcomeMessage = 'Welcome to the dashboard';

// Different data types you'll encounter
let userId = 12345;                    // number
let isLoggedIn = false;                // boolean
let testResults = null;                // null
let apiResponse;                       // undefined

// Constants (values that won't change)
const BASE_URL = 'https://demo-app.com';
const TIMEOUT_MS = 30000;

//**Console.log - Your First Debugging Tool**
// Basic logging
console.log('Test started');
console.log('Username:', userName);
console.log('Login attempt:', isLoggedIn);

// Logging different data types
console.log('User ID type:', typeof userId);
console.log('Expected message:', expectedWelcomeMessage);

// Useful for debugging test flow
console.log('=== LOGIN TEST START ===');
console.log('Navigating to:', BASE_URL);
console.log('Using credentials:', userName);
console.log('=== LOGIN TEST END ===');