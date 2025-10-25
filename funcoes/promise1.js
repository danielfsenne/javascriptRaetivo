const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log(letraMinuscula))

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

