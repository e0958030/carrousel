(function(){
    //console.log("Vive JavaScript");
    let carrousel = document.querySelector('.carrousel')
    //console.log("conteneur carrousel =" + carrousel.tagName);

    let bouton = document.querySelector('.bouton__ouvrir')
    //console.log("bouton =" + bouton.tagName);
    
    let carrousel__x = document.querySelector('.carrousel__x')

    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })
        
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

})()
