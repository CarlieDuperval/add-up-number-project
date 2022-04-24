// given a function add to numbers in an array

const addUpToNumber = (arr1) => {
    let sum = 0
    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i]
    }
    return sum

}
console.log(addUpToNumber([1, 3, 4, 23]))