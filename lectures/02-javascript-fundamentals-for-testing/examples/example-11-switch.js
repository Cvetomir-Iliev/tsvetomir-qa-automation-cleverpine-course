let environment = "feature";

switch (environment) {
  case "development":
    console.log("Using dev database and relaxed timeouts");
    break;
  case "staging":
    console.log("Using staging env with prod-like data");
    break;
  case "production":
    console.log("Using production env - be careful!");
    break;
  default:
    console.log("Unknown environment");
}
