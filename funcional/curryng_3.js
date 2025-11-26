function textoComTamanhoEntre(min, max, erro, texto){
    return function (max){
        return function(erro){
            return function(texto){
                const tamanho = (texto||'').trim().length

                if(tamanho < min || tamanho > max){
                     throw erro
            }           
        }
     }
}
}
function aplicarValidacao(fn, valor){
    return function valor(){
    try{
        fn(valor)
    }catch(e){
        return {error: e}
    }
}
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoInvalido = forcarTamanhoPadrao('Nome do produto inválido')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoInvalido)

const p1 = {nome: 'Caderno', preco: 17.90, desc: 0.25}
const p2 = {nome: 'Lapis', preco: 3.0, desc: 0.15}
console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))