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

const cards = document.querySelectorAll('.card');

const secondCard = cards[1];

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

let exo06cards = document.querySelectorAll('.card')[0];

const buttonSuccess = exo06cards.querySelector('.btn-success');
const imgCard = exo06cards.querySelector('.card-img-top');
const textCard = exo06cards.querySelector('.card-text');

buttonSuccess.addEventListener("mouseenter",reduce);
buttonSuccess.addEventListener("mouseleave",backBasic);

function reduce (){
  console.log("L'événement mouseenter a été déclenché !");
  imgCard.style.width = '20%';
};

function backBasic (){
  console.log("L'événement mouseenter a été déclenché !");
  imgCard.style.width = '100%';
};






// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

// Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

// Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

// Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça.
