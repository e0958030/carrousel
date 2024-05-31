(function(){
    console.log("Vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    console.log("conteneur carrousel = " + carrousel.tagName);
    let bouton = document.querySelector('.bouton__ouvrir');
    console.log("bouton = " + bouton.tagName);
    let carrousel__x = document.querySelector('.carrousel__x');
    console.log('carrousel__x' + carrousel__x.tagName);
    let galerie = document.querySelector('.galerie');
    console.log('galerie = ' + galerie.tagName);
    let carrousel__figure = document.querySelector('.carrousel__figure');

    /* récupère la première image de la galerie */
    let galerie__img = galerie.querySelectorAll('img');
    console.log(galerie__img);
    let index = 0;
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index++;
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image
     * @param elm l'élément image de la galerie
     */
    function creer_image_carrousel(index, elm){
        console.log(elm.src); //vérifier l'adresse url
        //créer les images du carrousel
        let carrousel__img = document.createElement('img');
        carrousel__img.src = elm.src;
        carrousel__img.classList.add('carrousel__img');
        //ajouter un attribut à la balise html
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);

        // Attendre que l'image soit chargée pour ajuster la taille de la modal
        carrousel__img.addEventListener('load', function() {
            ajusterTailleModal();
        });
    }

    /**
     * Créer le bouton radio du carrousel
     * @param {*} index le numéro de l'image
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

        /* Écouteur pour capter les clics des boutons radio */
        carrousel__radio.addEventListener('change', function(){
            console.log("Clic sur bouton radio");
            let indexSelection = carrousel__radio.dataset.index;
            let figures = document.querySelectorAll('.carrousel__img');
            
            for(let i = 0; i < figures.length; i++){
                figures[i].style.opacity = 0;
            }

            figures[indexSelection].style.opacity = 1;
            ajusterTailleModal();
        });
    }

    /* Ajout d'écouteurs pour les flèches */
    let boutonAvant = document.createElement('button');
    boutonAvant.classList.add('img__avant');
    boutonAvant.textContent = '←'; // Flèche gauche

    let boutonApres = document.createElement('button');
    boutonApres.classList.add('img__apres');
    boutonApres.textContent = '→'; // Flèche droite

    boutonAvant.addEventListener('click', function() {
        changerImage(-1);
    });

    boutonApres.addEventListener('click', function() {
        changerImage(1);
    });

    carrousel.appendChild(boutonAvant);
    carrousel.appendChild(boutonApres);

    /* écouteur pour ouvrir la boîte modale */
    for (const img of galerie__img) {
        img.addEventListener('click', function() {
            carrousel.classList.add('carrousel--ouvrir'); // ouvrir le carrousel
            console.log("Le carrousel est ouvert!");
            
            // Trouver l'index de l'image cliquée
            let indexImageClic = Array.from(galerie__img).indexOf(img);
            
            // Afficher l'image correspondante dans le carrousel
            let figures = document.querySelectorAll('.carrousel__img');
            for (let i = 0; i < figures.length; i++) {
                if (i === indexImageClic) {
                    figures[i].style.opacity = 1;
                } else {
                    figures[i].style.opacity = 0;
                }
            }

            // Ajuster la taille de la boîte modale
            ajusterBoiteModale();
        });
    }

    /* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir'); // fermer le carrousel
        console.log("Carrousel fermé");
    });

    /* Fonction pour changer l'image du carrousel */
    function changerImage(direction) {
        let figures = document.querySelectorAll('.carrousel__img');
        let indexCourant = 0;
        for (let i = 0; i < figures.length; i++) {
            if (figures[i].style.opacity === '1') {
                indexCourant = parseInt(figures[i].dataset.index);
                figures[i].style.opacity = 0;
                break;
            }
        }

        let nouvelIndex = (indexCourant + direction + figures.length) % figures.length;
        figures[nouvelIndex].style.opacity = 1;

        // Ajuster la taille de la boîte modale après avoir changé l'image
        ajusterBoiteModale();
    }

    /* Fonction pour ajuster la taille de la boîte modale */
    function ajusterBoiteModale() {
        let imageCourante = document.querySelector('.carrousel__img[style*="opacity: 1"]');
        
        if (imageCourante) {
            let largeurImage = imageCourante.naturalWidth/7;
            let hauteurImage = imageCourante.naturalHeight/7;

            // Ajuster la taille de la boîte modale en fonction de la taille de l'image
            carrousel.style.width = largeurImage + 'px';
            carrousel.style.height = hauteurImage + 'px';

            // Centrer la boîte modale dans la fenêtre
            carrousel.style.top = `calc(50% - ${hauteurImage / 2}px)`;
            carrousel.style.left = `calc(50% - ${largeurImage / 2}px)`;
        }
    }
})();
