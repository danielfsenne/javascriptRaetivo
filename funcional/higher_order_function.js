function executar(fn, ...params){
    fn(...params)
}
function somar(a, b, c){
    return a + b + c
}
function multi(a, b){
    return a * b
}

const r1 = executar(somar, 4, 5, 6)
const r2 = executar(multi, 40, 33)

console.log(r1, r2)
