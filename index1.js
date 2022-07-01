// Write a function thate given an array of numbers returns the sum of all numbers


const addUpToNumber = (arr1) => {
    let sum = 0
    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i]
    }
    return sum

}
console.log(addUpToNumber([1, 3, 4, 23]))