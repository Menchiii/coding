let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element programmatically
let result = ages[ages.length - 1] - ages[0];
console.log("Result of subtraction:", result);

// Add a new age to the array
let newAge = 50;
ages.push(newAge);

let resultDynamic = ages[ages.length - 1] -ages[0]
console.log("Dynamic result of subtraction", resultDynamic);

// calculate average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// question #2

let names = ["Sam, Tommy, Tim, Sally, Buck, Bob"]

let totalLetters = 0;
for (i = 0; i < name.length; i++);{
    console.log(totalLetters += names[i].length)
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

// Concatenate all the names together, separated by spaces
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}
console.log("Concatenated names:", concatenatedNames.trim());

// question #3
// In Java Script you can access the last element of an array by using the index regardless
// of how long the array is by using [array.length - 1] and this will target the last element

let array = [5,10,15,20]

let lastelement = array[array.length - 1];{
    console.log("last element of array", lastelement);
}

// question #4
// To access the first element of an array you will have to target it by using thew index,
// it would look like this

let numbers = [1,2,3,4,5]

let firstelement = numbers[0];{
    console.log("first element of numbers", firstelement);
}

// question #5
// creating new array from Names

let  Names = ["Kelly, Sam, Kate"]
let namelengths = [5, 3, 4];

for(let i = 0; i<Names.length; i++);{
    console.log("Name lengths", namelengths)
}

// question #6
// finding the sum of nameLengths
let nameLengths = [5, 3, 4];
let summ = 12
for(let i = 0; i < nameLengths; i++){
    console.log(summ += nameLengths[i]);
}
console.log("Sum of name Lengths", summ)