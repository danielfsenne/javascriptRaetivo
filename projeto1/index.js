const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"','_', '<i>', '</i>', '\r', '[]', '(',')'
]

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSeIncluir(linhas, '-->'))
    .then(linhas => fn.removerseApenasNumeros(linhas))
    .then(fn.removerSimbolos(simbolos))
    .then(console.log) 