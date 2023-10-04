//prompts user to input flavors with no commas or spaces
// user types vanilla, vanilla, vanilla, strawberry, coffee, coffee

const userInput = prompt(
  "Please type the Froyo flavors you would like to order with commas and no spaces in between."
);

// splits input string into an array of flavors

const flavors = userInput.split(",");

//create a object to store flavors

const flavorCount = {};

//Count the number of flavors

flavors.forEach((flavor) => {
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
});

//logs everything to the console
console.table(flavorCount);
