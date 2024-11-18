// Fonctionnalité 1
let footerExo = document.querySelector('footer');
let compteur = 0;
footerExo.addEventListener("click",Message1);
function Message1(){
    compteur++;
    console.log(`Vous avez cliqué ${compteur} fois`)
};

// Fonctionnalité 2
const navbarHeader = document.getElementById('navbarHeader');
const hamburgerButton = document.querySelector('.navbar-toggler');
hamburgerButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    navbarHeader.classList.toggle('show');
}

// Fonctionnalité 3

// Sélectionner la première carte
let firstEditButton = document.querySelector('.btn-outline-secondary');
let firstCardText = document.querySelector('.card-text');

// Ajouter l'événement sur le bouton
firstEditButton.addEventListener('click', changeTextColor);

function changeTextColor() {
    firstCardText.style.color = 'red'; // Changer la couleur du texte
    firstEditButton.removeEventListener('click', changeTextColor); // Supprimer l'écouteur après le clic
};


// Fonctionnalité 4

const exo04card = document.querySelectorAll('.card');
const secondCard = exo04card[1];//pourrait être écrit [1] fin ligne 35 en renommant exo04card => secondCard

let secondCardText = secondCard.querySelector('.card-text');

let secondEditButton = secondCard.querySelector('.btn-outline-secondary');

secondEditButton.addEventListener('click',toggleTextColor);

function toggleTextColor(){
  if (secondCardText.style.color ==='green'){
secondCardText.style.color = '';
  } else {
    secondCardText.style.color = 'green';
  }
}

// Fonctionnalité 5

const selectLink = document.querySelector('link');
document.getElementsByClassName('navbar')[0].addEventListener("dblclick",nuke);

//fonctionne sans appelle de constante
// nuclearHeader.addEventListener("dblclick",nuke);

function nuke(){
  if (selectLink.disabled === false){
    selectLink.disabled = true;
  } else {
    selectLink.disabled = false;
  }
};


// Fonctionnalité 6

// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.card');

// Créer un objet pour stocker l'état de chaque carte
const cardStates = {};

// Parcourir chaque carte
cards.forEach((card, index) => {
    // Initialiser l'état de chaque carte
    cardStates[index] = {
        isReduced: false // Indique si la carte est réduite
    };

    const buttonSuccess = card.querySelector('.btn-success');
    const cardImage = card.querySelector('.card-img-top');
    const cardText = card.querySelector('.card-text');

    // Ajouter un événement "mouseenter" au bouton "View"
    buttonSuccess.addEventListener('mouseenter', () => {
        // Vérifier l'état actuel et effectuer un toggle
        if (!cardStates[index].isReduced) {
            console.log(`Réduction de la carte ${index}`);
            cardImage.style.width = "20%"; // Réduire l'image
            cardImage.style.transition = "width 0.5s ease"; // Ajouter une transition
            cardText.style.display = "none"; // Masquer le texte
            cardStates[index].isReduced = true; // Marquer la carte comme réduite
        } else {
            console.log(`Restauration de la carte ${index}`);
            cardImage.style.width = "100%"; // Restaurer l'image
            cardText.style.display = "block"; // Réafficher le texte
            cardStates[index].isReduced = false; // Marquer la carte comme restaurée
        }
    });
});

// Fonctionnalité 7

const carousselCards = document.querySelectorAll('.card');

// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

// Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

// Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.