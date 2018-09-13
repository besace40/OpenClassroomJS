/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var i = 1;

while(i <= 6 && solution !==essai){
  var essai = prompt("Indiquez un chiffre entre 1 et 100 : ");
  if (essai<=100 && essai>0){
    if (essai < solution){
      console.log(essai + " est trop petit");
    }else if(essai > solution){
      console.log(essai + " est trop grand");
    }else if(essai = solution){
      console.log("Bravo, la solution etait bel et bien : " + solution);
      console.log("Vous avez trouvé en " + i +" essai(s)");
    }
  }else{console.log("Vous n'avez pas renseigné de nombre entier/Le nombre n'est pas compris entre 1 et 100")}
  i++;
}
if (solution !== essai){
console.log("Perdu, la bonne réponse était " + solution);
}
