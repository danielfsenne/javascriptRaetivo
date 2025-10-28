function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function (){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve, 5000)
    })
}

esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)

async function exeutar(){
    let valor = await retornarValor()
    await esperarPor(2000)
    console.log('Async/await 1...')

    await esperarPor(2000)
    console.log('Async/await 2...')

    await esperarPor(2000)
    console.log('Async/await 3...')
}
exeutar()