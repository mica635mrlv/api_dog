'use strict'

// Fazer o javascript interagir c/ os botões criados no html
const botaoBuscar = document.getElementById('buscar')
const barraPesquisa = document.getElementById('barra-pesquisa');

// Criou a main e colocou no body do documento
const main = document.createElement('main');
main.id = 'galeria';
document.body.appendChild(main);

botaoBuscar.addEventListener('click', () => {
    const nomeBusca = barraPesquisa.value.trim().toLowerCase(); // trim = ignorar espaços, indicar o valor que vai entrar no input
    main.innerHTML = '';

    async function buscarImagens(raca) {
        const url = `https://dog.ceo/api/breed/${raca}/images`
        const response = await fetch(url) // await = falar para o consolog esperar a API
        const imagens = await response.json() // transpormar a resposta da API em json (não use await em tudo)
        return imagens.message
    }

    async function mostrarImagens() {
        const galeria = document.getElementById('galeria')
        const raca = nomeBusca;

        galeria.innerHTML = ""

        const listaImg = await buscarImagens(raca)

        listaImg.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            galeria.appendChild(img)
        });
    }

    mostrarImagens();

});