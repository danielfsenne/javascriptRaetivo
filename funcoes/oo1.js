function Produto(nome, preco, desc = 0.15){
    this.nome = nome
    this.desc = desc
    this.preco = preco

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}
const p1 = new Produto('Caneta', 8.88)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 1560.19)
console.log(p2.preco)
console.log(p2.precoFinal())
