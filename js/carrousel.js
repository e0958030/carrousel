// (fonction(){})() est une fonction auto éxécutante

(function(){
    console.log("Vive Javascript")
    let carrousel = document.querySelector('.carrousel')
    console.log("conteneur carrousel = " + carrousel.tagName)
    let bouton = document.querySelector('.bouton__ouvrir')
    console.log("bouton = " + bouton.tagName)
    let carrousel__x = document.querySelector('.carrousel__x')
    console.log('carrousel__x' + carrousel__x.tagName)
    let galerie = document.querySelector('.galerie')
    console.log('galerie' + galerie.tagName)
    let carrousel__figure = document.querySelector('figure')
    
    //Création dynamique d'une image du carrousel 
    let galerie__img = galerie.querySelectorAll('img')
    console.log("premiere image de la galerie = " + galerie__img.src)
    let index = 0
    // carrousel__img.src = galerie__img.src

    for (const elm of galerie__img){   
        creer_image_galerie(index, elm)     
        creer_radio_carrousel(index)
        index = index++
    }
    
    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image
     * @param elm l'élément image de la galerie
     */
  
    function creer_image_galerie(index, elm){
        console.log(elm.src) //vérifier l'adresse url
        //créer les images du carrousel
        let carrousel__img = document.createElement('img')
        carrousel__img.src = elm.src
        carrousel__img.classList.add('carrousel__img')
        //ajouter un attribut à la balise html
        carrousel__img.dataset.index = index
        carrousel__figure.appendChild(carrousel__img)
    }

        
    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image
     * @param elm l'élément image de la galerie
     */

    function creer_radio_carrousel(index){
        let carrousel_radio = document.createElement('input')
        //Ajouter une classe 
        // ajouter un index
        //ajouter un type radio
        //spécifier name
        //ajouter dans carrousel__form
    }

    /*
    //Collection d'images de la galerie    
    console.log("premiere image du carrousel = " + carrousel__img.src)
    carrousel__figure.appendChild(carrousel__img)
    console.log(carrousel__figure)
    */

/* écouteur pour ouvrir la boîte modale */
    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir') // ouvrir le carrousel
        console.log("J'ai bien cliqué sur le bouton!!!!!");
    })
/* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir') // fermer le carrousel
    })

})()