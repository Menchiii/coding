


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


// question #7

function concatenateWord(word, n) {
    return word.repeat(n);
}

// Example 
var Result = concatenateWord('Hi', 3);
console.log(Result);


// question #8
// Full name output
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

// Example usage
var fullName = getFullName('Mel', 'Lily');
console.log(fullName);


// question #9
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers4) {
    var sum = 0;
    for (var i = 0; i < numbers4.length; i++) {
        sum += numbers4[i];
    }
    return sum > 100;
}

var numbers1 = [20, 30, 40, 15]; // Sum = 105
console.log(isSumGreaterThan100(numbers1)); // Output: true

var numbers2 = [10, 20, 30]; // Sum = 60
console.log(isSumGreaterThan100(numbers2)); // Output: false


// question #10
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    if (Numbers3.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }
    
    var sum = 0;
    for (var i = 0; i < Numbers3.length; i++) {
        sum += Numbers3[i];
    }
    
    return sum / numbers.length;
}

// Example usage
var Numbers3 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers)); // Output: 30

// question #11
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(arr1, arr2) {
    // Calculate average of arr1
    var sum1 = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    var avg1 = sum1 / arr1.length;

    // Calculate average of arr2
    var sum2 = 0;
    for (var j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }
    var avg2 = sum2 / arr2.length;

    // Compare averages
    return avg1 > avg2;
}

// Example usage
var array1 = [10, 20, 30, 40, 50];
var array2 = [5, 15, 25, 35, 45];
console.log(compareAverage(array1, array2)); // Output: true (because average of array1 is greater)

//  question #12
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage
console.log(willBuyDrink(true, 15)); // Output: true
console.log(willBuyDrink(true, 5));  // Output: false
console.log(willBuyDrink(false, 20)); // Output: false


// question #13
// Here is a function that takes an array of numbers and returns the sum of all positive numbers in the array. I created this function because it's a common task to sum only positive numbers in an array
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Example usage
console.log(sumOfPositiveNumbers([1, -2, 3, -4, 5])); // Output: 9 (1 + 3 + 5)
console.log(sumOfPositiveNumbers([-1, -2, -3])); // Output: 0 (no positive numbers)
console.log(sumOfPositiveNumbers([])); // Output: 0 (empty array)

// This function iterates through each number in the array, checks if it's positive, and adds it to the sum if it is. Finally, it returns the sum of all positive numbers.