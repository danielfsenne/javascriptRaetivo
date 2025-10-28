class Produto{

    constructor(nome, preco, desc){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    precoFinal(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 8.88)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 1560.19)
console.log(p2.preco)
console.log(p2.precoFinal())