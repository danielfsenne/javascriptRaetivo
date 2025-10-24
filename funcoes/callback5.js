const carrinho = [
    {nome: 'Caneta', qtde: 10, price: 7.99},
    {nome: 'Lapís', qtde: 7, price: 2.0},
    {nome: 'Caderno', qtde: 0, price: 15.0},
    {nome: 'Estojo', qtde: 2, price: 12.0},
    {nome: 'Borracha', qtde: 5, price: 3.0}
]

const getTotal = item => item.qtde * item.price
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)
console.log(totalGeral)

Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }
        else{
            fn(acc, this[i], i, this)
        }
    }
    return acc
}