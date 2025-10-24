const carrinho = [
    {nome: 'Caneta', qtde: 10, price: 7.99, fragil: true},
    {nome: 'Lapís', qtde: 7, price: 2.0, fragil: false},
    {nome: 'Caderno', qtde: 3, price: 15.0, fragil: true},
    {nome: 'Estojo', qtde: 2, price: 12.0, fragil: false},
    {nome: 'Borracha', qtde: 5, price: 3., fragil: true}
]

const media = carrinho 
    .filter(item => item.fragil)
    .map(item => item.qtde * item.price)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + 1
        return{
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
    }, {qtde: 0, total: 0, media: 0})
    console.log(media)