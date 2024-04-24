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
    let carrousel__img = document.createElement('img')
    
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
        let carrousel__radio = document.createElement('input');
        // Ajouter une classe 
        carrousel__radio.classList.add('carrousel__radio');
        // ajouter un index
        carrousel__radio.dataset.index = index;
        // ajouter un type radio
        carrousel__radio.setAttribute('type', 'radio');
        // spécifier name 
        carrousel__radio.setAttribute('name', 'radio__carrousel');
        // ajouter dans carrousel__form 
        let carrousel__form = document.querySelector('.carrousel__form');
        carrousel__form.appendChild(carrousel__radio);
        //Ajouter un écouteur qui permettera de modifier l'opacité de l'image index
        //carrousel__figure.children[index].style.opacity = 1

        /* Écouteur pour capter les clics des boutons radio */
        carrousel__radio.addEventListener('mousedown', function(){
        console.log("Clic sur bouton radio");
        })

        //boucle for of pour chaque bouton radio
        let boutonRadio = carrousel__radio
        for(unBoutonRadio of lesBoutonsRadio){
            if (index === selectedIndex) {
                figure.style.opacity = 1;
            } else {
                figure.style.opacity = 0;
            }
        }
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