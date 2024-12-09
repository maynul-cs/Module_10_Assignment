// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(x,y){
    return x-y;
}
let result=calculateDifference(85,40);
console.log(result);


// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(x){
    return x % 2 !== 0;
}
console.log(isOdd(20));


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let min = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  let numbers = [10, 40, 25, 7, 80];
  let smallestNumber = findMin(numbers);
  console.log("The Smallest Number is =" + " " + smallestNumber);


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    const evenNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  
  const numberArray = [11, 24, 13, 44, 15, 26, 77, 18];
  const evenNumbersArray = filterEvenNumbers(numberArray);
  console.log(evenNumbersArray);


