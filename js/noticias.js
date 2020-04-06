// let btnAdd = document.querySelector('#adicionar');
// let row = document.querySelector('.row');

let containerDeNoticias = document.querySelector('#listaDeNoticias')







async function pegarNoticias() {

    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=7e3ca095d1a04fddb82db70ce373e6e4')

    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach((noticia, index) => {

        let coluna = document.createElement('div')
        coluna.setAttribute('class', 'col-3')

        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        
        let imgCard = document.createElement('img')
        imgCard.setAttribute('class', 'card-img-top')
        imgCard.setAttribute('src', noticia.urlToImage)

        let bodyCard = document.createElement('div')
        bodyCard.setAttribute('class','card-body')

        let titleCard = document.createElement('h5')
        titleCard.setAttribute('class', 'card-title')
        titleCard.textContent = noticia.title

        let descriptionCard = document.createElement('p')
        descriptionCard.setAttribute('class', 'card-text')
        descriptionCard.textContent = noticia.description

        let linkCard = document.createElement('a')
        linkCard.setAttribute('class', 'btn btn-primary')
        linkCard.setAttribute('href', noticia.url)
        linkCard.textContent = "Ir para noticia"

        card.appendChild(imgCard)
        card.appendChild(bodyCard)
        bodyCard.appendChild(titleCard)
        bodyCard.appendChild(descriptionCard)
        bodyCard.appendChild(linkCard)

        coluna.appendChild(card)
        containerDeNoticias.appendChild(coluna)
        












        // console.log("---------------------------------------------")
        // console.log('Titulo notícia: ' + noticia.title)
        // console.log('Descrição notícia: ' + noticia.description)
        // console.log('O link da imagem: ' + noticia.urlToImage)
    })

  


}

