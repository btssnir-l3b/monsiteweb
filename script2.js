//fichier de script pour faire apparaitre le menu de navigation

const liste = document.querySelector('.liste');
const btnResponsive = document.querySelector('.btn-responsive');

btnResponsive.addEventListener('click',() => {
    liste.classList.toggle('show');
})

//Rendre la barre de nouveau invisible lorsque la fenêtre s'agrandit

window.addEventListener('resize', () => {

    if(window.innerWidth > 650){
        liste.classList.remove('show');
    }
})