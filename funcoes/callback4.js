const carrinho = [
    {nome: 'Caneta', qtde: 10, price: 7.99},
    {nome: 'Lapís', qtde: 7, price: 2.0},
    {nome: 'Caderno', qtde: 0, price: 15.0},
    {nome: 'Estojo', qtde: 2, price: 12.0},
    {nome: 'Borracha', qtde: 5, price: 3.0}
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const qtdeMaiorOuIgualAZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

const itensValidos = carrinho
    .filter(qtdeMaiorOuIgualAZero)
    .map(getNome)
console.log(itensValidos)

