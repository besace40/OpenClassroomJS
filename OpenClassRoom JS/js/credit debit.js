var CompteBancaire = {
  initCB : function(titulaire, solde){
    this.titulaire = titulaire;
    this.solde = solde;
  },
  decrire : function (){
    var description = "titulaire : "+ this.titulaire +", solde : "+ this.solde;
    return description;
  },
  debiter : function (montant) {
    var somme = this.solde;
    this.solde -= montant;
    return somme;
  },
  crediter : function (montant) {
    var somme = this.solde;
    this.solde += montant;
    return somme;
  },
};

var CompteEpargne = Object.create(CompteBancaire);
  CompteEpargne.initCE = function(titulaire, solde,taux){
    this.initCB(titulaire, solde);
    this.taux = taux;
  }

CompteEpargne.ajouterInterets = function(){
  this.solde = this.solde + this.solde*this.taux;
};



var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
