// && stops evaluating if the first operand is falsy
let value = "Hi" && "Hello"; // Stops at false
console.log(value); // false

// || stops evaluating if the first operand is truthy
value = "bye" || "Hello"; // Stops at true
console.log(value); // true
