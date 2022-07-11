const core = require("@actions/core")

const firstGreeting = core.getInput("first")
const secondGreeting = core.getInput("second")
const thirdGreeting = core.getInput("third")

console.log(`Helloj ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
    console.log(`Hellooo ${thirdGreeting}`);
}
