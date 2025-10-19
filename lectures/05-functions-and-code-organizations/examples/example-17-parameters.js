// Function with no parameters (limited usefulness)
function sayHello() {
  console.log("Hello, test user!");
}

// Function with parameters (much more flexible)
function greetUser(userName) {
  console.log("Hello, " + userName + "!");
}

sayHello(); // "Hello, test user!"
greetUser("Alice"); // "Hello, Alice!"
greetUser("Bob"); // "Hello, Bob!"
