const pessoa = {
    nome: 'Maria',
    peso: 71,
    altura: 1.76
}

//Atribuição por referencia
function alterarPessoa(novaPessoa){
    novaPessoa.nome = 'João'
    novaPessoa.peso = 80
}
alterarPessoa(pessoa)
console.log(pessoa)