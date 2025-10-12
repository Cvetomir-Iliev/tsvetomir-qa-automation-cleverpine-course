// Break
let serverResponses = [200, 500, 200, 404, 200];

for(let i = 0; i < serverResponses.length; i++) {
    let response = serverResponses[i]
    if (response >= 400) {
        console.log("First error:", response);
        break;
    }
}

// Continue
let testEmails = ["valid@email.com", "", "invalid", "another@email.com", "ap"]

for(let i = 0; i < testEmails.length; i++) {
    let email = testEmails[i];
    console.log(email);

    if(email.length < 3) {
        console.log("Skipping short email input:", email);
        continue;
    
    }

    let isValid = email.includes("@") && email.includes(".");
    
    console.log(`Email ${email} - ${isValid ? "VALID" : "INVALID"}`);

}