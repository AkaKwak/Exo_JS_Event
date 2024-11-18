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

// DOMContentLoaded est un événement qui se déclenche lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, les images et les sous-frames aient fini de charger.

// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner le bouton de rotation
  const nextButton = document.querySelector('.btn-secondary');

  // Sélectionner le conteneur parent des cards
  const cardContainer1 = document.querySelector('.album .container .row');

  // Définir la fonction de rotation
  function RotateCardsNext() {
      // Sélectionner toutes les cards
      const cards = cardContainer1.querySelectorAll('.col-md-4');
      
      // Vérifier s'il y a au moins une card
      if (cards.length > 0) {
          // Sélectionner la dernière card
          const lastCard = cards[cards.length - 1];
          
          // Déplacer la dernière card au début du conteneur
          cardContainer1.insertBefore(lastCard, cards[0]);
      }
  }

  // Ajouter l'écouteur d'événement au bouton
  nextButton.addEventListener('click', RotateCardsNext);
});

//Fonctionnalité 8

// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner le bouton bleu (flèche <==)
  const rotateBackwardButton = document.querySelector('.btn-primary');
  // Sélectionner le conteneur parent des cards
  const cardContainer = document.querySelector('.album .container .row');

  // Fonction pour faire tourner les cards vers l'arrière
  function rotateCardsBackward(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      
      // Sélectionner toutes les cards dans le conteneur
      const cards = cardContainer.querySelectorAll('.col-md-4');
      
      // Vérifier s'il y a au moins une card
      if (cards.length > 0) {
          // Sélectionner la première card
          const firstCard = cards[0];
          // Déplacer la première card à la fin du conteneur
          cardContainer.appendChild(firstCard);
      }
  }

  // Ajouter l'écouteur d'événement 'click' au bouton bleu
  rotateBackwardButton.addEventListener('click', rotateCardsBackward);
});

//Fonctionnalité 9

// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner le logo ou l'élément contenant "JS & Events"
  const logo = document.querySelector('.navbar-brand');
  
  // Ajouter un écouteur d'événement 'keypress' à l'élément logo
  logo.addEventListener('keypress', (event) => {
      // Retirer toutes les classes du body pour éviter les accumulations
      document.body.className = '';

      switch (event.key) {
          case 'a':
              // Condenser à gauche
              document.body.classList.add('col-4', 'offset-md-0');
              break;
          case 'z':
              // Condenser au centre
              document.body.classList.add('col-4', 'offset-md-4');
              break;
          case 'e':
              // Condenser à droite
              document.body.classList.add('col-4', 'offset-md-8');
              break;
          case 'r':
              // Rétablir la mise en page normale
              document.body.classList.remove('col-4', 'offset-md-0', 'offset-md-4', 'offset-md-8');
              break;
          default:
              break;
      }
  });
});