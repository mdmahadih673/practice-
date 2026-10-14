
function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
}
console.log(isValidEmail("user@example.com"));


console.log(isValidEmail("invalid.email@"));


console.log(isValidEmail("user@exam ple.com"));


console.log(isValidEmail("user@example.c"));


console.log(isValidEmail("user@@example.com"));
