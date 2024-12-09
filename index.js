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
