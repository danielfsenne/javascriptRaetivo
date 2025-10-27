function funcionarOuNao(valor, chanceError){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceError){
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao('Testando', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Error: ${err}`))
    .then(() => console.log('Fimm'))