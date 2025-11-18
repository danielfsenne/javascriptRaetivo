const nums = [3, 7, 1, 9, 6]
function ordenar(array){
    return [...array].sort()
}
nums.sort()
const numsOrdenados = ordenar(nums)
    
console.log(nums, numsOrdenados)