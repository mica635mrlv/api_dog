'use strict'

const botaoBuscar = document.getElementById('buscar')
const barraPesquisa = document.getElementById('barra-pesquisa')

// const main = document.createElement('main');
// document.body.appendChild(main);

async function buscarImagens(raca) { // tudo no computador acontece em série (async falar para a função esperar a API)
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url) // await = falar para o consolog esperar a API
    const imagens = await response.json() // transpormar a resposta da API em json (não use await em tudo)
    console.log(imagens)
    return imagens.messagem
}

buscarImagens('bulldog');

// botaoBuscar.addEventListener('click', () => {
//     const valorBusca = barraPesquisa.value.trim();
//     main.innerHTML = ''; // Limpa resultados anteriores
//     if (valorBusca) {
//         const resultado = document.createElement('p');
//         resultado.textContent = `Você buscou: ${valorBusca}`;
//         main.appendChild(resultado);

//     } else {
//         prompt('Digite o nome de uma raça!');
//     }
// });