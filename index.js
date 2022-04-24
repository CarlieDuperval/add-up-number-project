// Write a function thate given an array of numbers returns the sum of all numbers

const numbers = [12, 4, 5, 7, 9]
function addUptoNumbers(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++ ){
        sum += arr[i] // sum = sum + arr[i]
    }
    return sum
}

console.log('The total number is : ', addUptoNumbers(numbers))



//2 and

