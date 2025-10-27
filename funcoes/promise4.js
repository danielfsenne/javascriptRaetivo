function gerarNumeros(min, max){
    if(min > max){
        [max, min] = [min, max]
        const [x, y] = a
    }
    return new Promise(resolve => {
        setTimeout(function(){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        })
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1, 60, 4000),
        gerarNumeros(1, 60, 3000),
        gerarNumeros(1, 60, 300),
        gerarNumeros(1, 60, 5000),
        gerarNumeros(1, 60, 3000),
        gerarNumeros(1, 60, 3000),
        gerarNumeros(1, 60, 1000)
    ])
}
gerarVariosNumeros().then(numeros => console.log(numeros))