function textoComTamanhoEntre(min, max, erro, texto){
    return function (max){
        return function(erro){
            return function(texto){
                const tamanho = (texto || '').trim().length

                if(tamanho < min || tamanho > max){
                     throw erro
            }           
        }
     }
}
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoInvalido = forcarTamanhoPadrao('Nome do produto inválido')


const p1 = {nome: 'Caderno', preco: 17.90, desc: 0.25}
forcarNomeProdutoInvalido(p1.nome)