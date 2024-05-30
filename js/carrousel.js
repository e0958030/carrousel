(function(){
    console.log("Vive Javascript")
    let carrousel = document.querySelector('.carrousel')
    console.log("conteneur carrousel = " + carrousel.tagName)
    let bouton = document.querySelector('.bouton__ouvrir')
    console.log("bouton = " + bouton.tagName)
    let carrousel__x = document.querySelector('.carrousel__x')
    console.log('carrousel__x' + carrousel__x.tagName)
    let galerie = document.querySelector('.galerie')
    console.log('galerie = ' + galerie.tagName)
    let carrousel__figure = document.querySelector('.carrousel__figure')

    /* récupère la première image de la galerie */
    let galerie__img = galerie.querySelectorAll('img')
    console.log(galerie__img)
    let index = 0
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm)
        creer_radio_carrousel(index)
        index++
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image
     * @param elm l'élément image de la galerie
     */
    function creer_image_carrousel(index, elm){
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
     * Créer le bouton radio du carrousel
     * @param {*} index le numéro de l'image
     */
    function creer_radio_carrousel(index){    
        let carrousel__radio = document.createElement('input')
        // Ajouter une classe 
        carrousel__radio.classList.add('carrousel__radio')
        // ajouter un index
        carrousel__radio.dataset.index = index;
        // ajouter un type radio
        carrousel__radio.setAttribute('type', 'radio')
        // spécifier name 
        carrousel__radio.setAttribute('name', 'radio__carrousel')
        // ajouter dans carrousel__form 
        let carrousel__form = document.querySelector('.carrousel__form')
        carrousel__form.appendChild(carrousel__radio)

        /* Écouteur pour capter les clics des boutons radio */
        carrousel__radio.addEventListener('change', function(){
            console.log("Clic sur bouton radio")
            let indexSelection = carrousel__radio.dataset.index
            let figures = document.querySelectorAll('.carrousel__img')
            
            for(let i = 0; i < figures.length; i++){
                figures[i].style.opacity = 0
            }

            figures[indexSelection].style.opacity = 1
        })
    }    
    
    /* écouteur pour ouvrir la boîte modale */
    for (const img of galerie__img) {
        img.addEventListener('click', function() {
            carrousel.classList.add('carrousel--ouvrir') // ouvrir le carrousel
            console.log("Le carrousel est ouvert!");
        });
    }

    /* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir') // fermer le carrousel
        console.log("Carrousel fermé")
    })

    /* Écouteur pour le bouton de gauche */
    let boutonGauche = document.querySelector('.bouton__gauche')
    boutonGauche.addEventListener('click', function() {
        let figures = document.querySelectorAll('.carrousel__img')
        let indexActuel = parseInt(document.querySelector('.carrousel__form input:checked').dataset.index)
        let newIndex = (indexActuel - 1 + figures.length) % figures.length
        figures[newIndex].click()
    })

    /* Écouteur pour le bouton de droite */
    let boutonDroite = document.querySelector('.bouton__droite')
    boutonDroite.addEventListener('click', function() {
        let figures = document.querySelectorAll('.carrousel__img')
        let indexActuel = parseInt(document.querySelector('.carrousel__form input:checked').dataset.index)
        let nouvelIndex = (indexActuel + 1) % figures.length
        figures[nouvelIndex].click()
    })

})();
