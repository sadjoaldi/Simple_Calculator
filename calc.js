const firstValue = parseInt(prompt("First value"));
const operator = parseInt(prompt("operator"));
const secondValue = parseInt(prompt("Second value"));

if (operator == "+") {
  let result = firstValue + secondValue;
  console.log(result);
} else {
  let result = firstValue - secondValue;
  console.log(result);
}
