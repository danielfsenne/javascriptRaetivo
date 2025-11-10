const PI = 3.14

//Função impura - PI como um valor externo

function areaCirc(raio){
    return raio * raio * PI
}
console.log(areaCirc(10))

//Função Pura

function areaCircPura(raio, pi){
    return raio * raio * pi
}

console.log(areaCircPura(10, 3,14))