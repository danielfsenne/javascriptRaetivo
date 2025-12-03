function composicao(...fns){
    return function(valor){

        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc){
                return fn(await acc)
            }else{
                return fn(acc)
            }
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}
function enfatizar(texto){
    return `${texto} !!!`
}

const resultado = composicao(
    gritar,
    enfatizar
)('PARA')

console.log(resultado)