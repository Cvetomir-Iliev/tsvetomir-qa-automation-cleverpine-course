let processTestEnvironments = ["development", "staging", "production"];

console.log("Number of environments:", processTestEnvironments.lenght);

if (processTestEnvironments.length > 0) {
    console.log("We have enviroments to test");
}else {
    console.log("No test environments configured");
}