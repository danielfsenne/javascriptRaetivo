const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Camila', 'Daniela']
const primeiraLetra = texto => texto [0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, price: 7.99},
    {nome: 'Lapís', qtde: 7, price: 2.0},
    {nome: 'Caderno', qtde: 0, price: 15.0},
    {nome: 'Estojo', qtde: 2, price: 12.0},
    {nome: 'Borracha', qtde: 5, price: 3.0}
]

// const getNome = item => item.nome
// console.log(carrinho.map(getNome))

// const getTotal = item => item.qtde * item.price
// const totais = carrinho.map(getTotal)
// console.log(totais)

Array.prototype.meuMap = function(fn){
    const novoArray = []
    for( let i = 0; i < this.length; i ++){
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.price
const totais = carrinho.meuMap(getTotal)
console.log(totais)