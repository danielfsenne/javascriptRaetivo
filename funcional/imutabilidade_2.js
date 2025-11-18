const nums = [1, 4, 7, 9, 0, 5]


//Declarativa
// let total = 0 

// for(let i = 0; i < nums.length; i ++){

//     total += nums[i]
// }
// console.log(total)

//Reduce
const somar = (a, b) => a + b
const total = nums.reduce(somar)
console.log(total)

//Recursividade
function somarArrray (array, total = 0){
    if(array.length === 0){
        return total
    }
    return somarArrray(array.slice(1), total + array[0 ])
}
somarArrray(nums)