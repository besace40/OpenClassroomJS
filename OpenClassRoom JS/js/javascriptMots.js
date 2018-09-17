var mot = prompt("Ecrivez un mot : ");
console.log("le mot " + mot +" a "+ mot.length + " caractère(s)");
console.log("En majuscules : " + mot.toUpperCase());
console.log("En miniscules : " + mot.toLowerCase());

function compterNbVoyelles(mot){
  var nbConsonnes = 0;
  var nbVoyelles = 0;
    for(var i = 0; i<mot.length; i++){
      if(mot[i]==="a" || mot[i]==="e" || mot[i]==="o" || mot[i]==="i"
  || mot[i]==="u" ||   mot[i]==="y"){  //||"e"||"i"||"o"||"u"||"y"
        nbVoyelles++;
      }else {
        // Rien
      }
    }nbConsonnes = (mot.length - nbVoyelles);
    console.log("Le mot " + mot + " a " + nbVoyelles+ " voyelle(s) et " + nbConsonnes + " consonne(s)");
    return mot;
}

function inverser(mot){
  var motInv = "";
  for(var i = mot.length-1; i>=0; i--){
    motInv +=  mot[i];
  }
  console.log("Le mot "+ mot+ " s'écrit à l'envers : " + motInv);
  if(motInv === mot){
   console.log("C'est un palindrome");
  } else {
   console.log("Ce n'est pas un palindrome");
 } return mot;
}

function trouverLettreLeet(lettre){
  var lettreAvantLeet = lettre;
  for(var i = 0; i<mot.length; i++){
    switch (lettre) {
      case "a": lettre=4;
                break;
      case "b": lettre=8;
                break;
      case "e": lettre=3;
                break;
      case "l": lettre=1;
                break;
      case "o": lettre=0;
                break;
      case "s": lettre=5;
                break;
      default :
    }

  }console.log("Lettre " + lettreAvantLeet +" leeté : "+lettre);
   return lettre;
}

function convertirEnLeetSpeak(mot){
  var motLeeté = "";
  for(var i = 0; i<mot.length; i++){

    motLeeté +=   trouverLettreLeet(mot[i]);
  }
  console.log("En leet : "+motLeeté);
  return motLeeté;
}

compterNbVoyelles(mot);
inverser(mot);
convertirEnLeetSpeak(mot);

//********************************************


var stylo1 = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

stylo1.prix = 3;

function MonStylo(){
}

var stylo2 = new MonStylo();

console.log(stylo1.type+ stylo1.prix);

//********************************************


var arme = {
  nom : "dague",
  dps : 30
}

var perso = {
  nom : "Savarox",
  sante : 200,
  force : 35,
  xp : 15000,
  armeDroite : arme.nom,
  lancerArme : function (){
    var lancé = this.nom + " lance " + this.armeDroite +" et effectue " + arme.dps + " dégats.";
    return lancé;
  }
};

function decrire(personnage) {
  var description = personnage.nom + " a " + personnage.sante + " PV et " + personnage.force+ "PF"
  +" et "+ personnage.xp + " points d'xp.";
  return description;
}
console.log(decrire(perso));
perso.xp += 2000;
perso.sante -= 5;
console.log(perso.lancerArme());

console.log(decrire(perso));

//********************************************


var chien = {
  nom : "Crockdur",
  taille : "75",
  race : " mâtin de Naples",

  aboyer : function (){
    return "Grr ! Grrr ! ";
  }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

//********************************************


var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
  perimetre: function(){
    return Math.PI * r*2;
  },
  aire: function(){
    return Math.PI * r*r;
  }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

//********************************************

var credit = Number(prompt("Saisir crédit : "));
var debit = Number(prompt("Saisir débit : "));

var compte = {
  titulaire : "Alex",
  solde : 0,
  crediter: function(credit){
    this.solde += credit;
  },
  debiter: function(debit){
    this.solde -= debit;
  },
  decrire: function(){
    console.log("Titulaire :"+ compte.titulaire+", solde : "+compte.solde);
  }
};


compte.decrire();
compte.crediter(credit);
compte.debiter(debit);
compte.decrire();

//********************************************


var mousquetaires = ["Athos","Porthos","Aramis"];

for(i=0;i<mousquetaires.length;i++){
  console.log(mousquetaires[i]);
}

mousquetaires.push("D'artagnan");

mousquetaires.forEach(function(mousquetaire){
  console.log(mousquetaire);
});


//********************************************

var valeurs=[11,3,7,2,9,10];
var somme = valeurs[0];
var max = 0;
for (i=0;i<valeurs.length;i++){
  somme += valeurs[i];
}

console.log(somme);

var valeurs = [3, 7, 177, 2, 9, 100];

var max = valeurs[0];


for (i=0;i<valeurs.length;i++){
  if(valeurs[i]>max){
    max = valeurs[i]
  }
}
console.log("la valeur max est : "+ max);


//********************************************


var mots = [];
var mot ="";

while (mot !== "stop"){
  var mot = prompt("Saissez un mot : ");
  mots.push(mot);
  if (mot == "stop"){
    break;
  }
}

for(i=0;i<(mots.length-1);i++){

  console.log(mots[i]);
}

//********************************************

var films = [];
var film = {
  initfilm : function (titre, annee,realisateur){
    this.titre = titre;
    this.annee = annee;
    this.realisateur = realisateur;
    films.push(this);
  },
  decrire : function(titre,annee,realisateur){
    var message = this.titre+"("+this.annee+","+this.realisateur+")";
    return message;
  }
}


film1 = Object.create(film);
film1.initfilm("Les lascars","2008","jean michel");


film2 = Object.create(film);
film2.initfilm("xxxx","2004","jean michel");




for(i=0;i<films.length;i++){
  console.log(films[i].decrire());
}

//********************************************
var Chiens=[];
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        Chiens.push(this);
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire : function () {

      var description = this.nom +" est  un " + this.race + " mesurant " + this.taille + " cm. " + this.aboyer();
      return description;
    }
};


chien1 = Object.create(Chien);
chien1.init("moka","yorkshire",14);

chien2 = Object.create(Chien);
chien2.init("jojo","golden",52);

console.log("Le chenil héberge : " +Chiens.length+" chien(s)");
for(i=0;i<Chiens.length;i++){
  console.log(Chiens[i].decrire());
}
