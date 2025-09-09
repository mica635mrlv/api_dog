// const imagens = fetch(url) caminho para ter acesso ao endpoint onde estão alocadas as imagens (resultado de uma requisição)

'use strict'

async function buscarImagens(raca) { // tudo no computador acontece em série (async falar para a função esperar a API)
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url) // await = falar para o consolog esperar a API
    const imagens = await response.json() // transpormar a resposta da API em json (não use await em tudo)
    console.log(imagens) // Temporario
    return imagens.messagem // funções puras usam return

// Não use console, tem que usar funções puras
    console.log(imagens) // Promose {<pending} pq o console log não deu tempo para a API responder
    console.log(imagens.messagem) //para ter todos as url no console
    console.log(imagens.messagem[5]) //para ter UMA url especifica no console
}

buscarImagens('bulldog')
