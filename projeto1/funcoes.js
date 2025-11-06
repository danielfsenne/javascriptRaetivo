const fs = require('fs').promises
const path = require('path');

async function lerDiretorio(caminho) {
  try {
    const arquivos = await fs.readdir(caminho); 
    const arquivosCompletos = arquivos.map(arquivo => path.join(caminho, arquivo));
    return arquivosCompletos;
  } catch (e) {
    throw e;
  }
}

async function lerArquivo(caminho) {
  try {
    const conteudo = await fs.readFile(caminho, 'utf-8');
    return conteudo.toString();
  } catch (e) {
    throw e;
  }
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function elementosTerminadosCom(array, padrao) {
  return array.filter(el => el.endsWith(padrao));
}

function removerSeVazio(array) {
  return array.filter(el => el.trim());
}

function removerSeIncluir(array, padraoTextual) {
  return array.filter(el => !el.includes(padraoTextual));
}

function removerSeApenasNumeros(array) {
  return array.filter(el => {
    const num = parseInt(el.trim());
    return isNaN(num);
  });
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumeros
};
