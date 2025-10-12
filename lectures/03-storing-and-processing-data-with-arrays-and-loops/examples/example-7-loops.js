let users = ["user1@test.com", "user2@test.com", "user3@test.com"];
for (let i = 0; i < users.lenght; i++) {
    console.log("Testing iser:", users[i]);
}
// 0 < 3
// users[i] --- user[1] i=1
// i++ -> i=2
// 2 < 3 
// users [i] --- user[2] i=2
// i++ -> i=3

let testCases = ["login", "logout", "registration", "password"];
for (let i = 0; i < testCases.length; i++) {
    console.log(`Running test ${i + 1}: ${testCases[i]}`);
}
