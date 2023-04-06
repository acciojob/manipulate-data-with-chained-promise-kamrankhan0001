//your JS code here. If required.
// Define the input array
const inputArr = [1, 2, 3, 4];

// Define the function that returns a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArr);
    }, 3000);
  });
}

// Define the function that filters out odd numbers and returns a new promise
function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredNumbers = numbers.filter((num) => num % 2 === 0);
      resolve(filteredNumbers);
    }, 1000);
  });
}

// Define the function that multiplies even numbers by 2 and returns a new promise
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Get the numbers and chain the filterOddNumbers and multiplyEvenNumbers promises to it
getNumbers()
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then((result) => {
    // Update the text of the HTML element with ID "output" with the final result
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result.join(", ");
  })
  .catch((error) => {
    console.error(error);
  });
