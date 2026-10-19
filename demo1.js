// ask the user questions in the terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// ask a question
readline.question('Enter your age: ', (answer) => {
// whatever the user types comes in as TEXT (a string),
// even if it looks like a number
  console.log('You typed: ' + answer);
  // convert that text into an actual number
  // const age = Number(answer);
  console.log('Next year you will be: ' + age + 1)
  //console.log('Next year: ' + (answer +1))
  readline.close()
});