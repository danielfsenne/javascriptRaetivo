function gerarNumeros(min, max, numerosProibidos){
    if(min > max){[max, min] = [min, max]
        const [x, y] = a
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject("Número repetido")
        }else{
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros){
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push (await gerarNumeros(1, 60, numeros))
    }
    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catchc(console.log)

// gerarNumeros(1, 5[1, 2, 4])
//     .then(console.log)
//     .catch(console.log)