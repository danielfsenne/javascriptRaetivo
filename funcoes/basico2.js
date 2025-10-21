function bomDia(){
    console.log("Bom Dia")
}
function boaTarde(){
    console.log("Boa Tarde")
}

//1) Passar uma função como parâmetro 
function executarQualquerCoisa(fn){
    if(typeof fn == 'function'){
        fn()
    }
}
executarQualquerCoisa()
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2) Retornar uma função a partir de outra função

function potencia(base, exp){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const bits8 = potencia(2, 8)
console.log(bits8)