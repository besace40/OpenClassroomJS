

//Prototype
var Personnage = {
  initPerso : function (nom, sante, force){
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.inventaire = {
      or : 10,
      cle : 1
    };
  },
  attaquer : function(cible){
    if(this.sante > 0){
      var degats = Math.floor(this.force*(Math.random()+0.5)) //Math floor recupere la partie entiere
      console.log(this.nom + " Lance son attaque !");
      console.log(this.nom+ " inflige " + degats + " dégats a " + cible.nom);
      cible.sante -= degats;
        if(cible.sante > 0) {
          console.log(cible.nom + " a desormais " + cible.sante + " PV ");
        }else{
          cible.sante = 0;
          console.log(cible.nom+ " succombe face à cette attaque de " + this.nom);
        }
    }else{
      this.sante = 0;
      console.log(this.nom+ " ne peut pas attaquer, il est mort dans d'attroces souffrances.");
    }
  },
};
// Le prototype sert de réference pour les joueurs et adversaires
var Joueur = Object.create(Personnage);
Joueur.initJoueur = function (nom, sante,force){
  this.initPerso(nom,sante,force);
  this.xp = 0;
};

Joueur.decrire = function(){
  return this.nom+ " a " + this.sante + " PV et "+ this.force+" points de force ainsi que "
  + this.xp+ " XP. Il possède " + this.inventaire.or+ " Pièces d'or et "+ this.inventaire.cle+" cle(s)" ;
};

Joueur.combattre = function (adversaire){

    while(adversaire.sante > 0 ){
      if (this.sante ===0 ){
        console.log(this.nom +" est mort. Fin")
        break;
      }else{
      this.attaquer(adversaire);
      }
      if (adversaire.sante === 0 ){
        console.log(this.nom + " a tué " + adversaire.nom + " et remporte " + adversaire.valeur + " XP."+
        "\nIl récupère " + adversaire.inventaire.or + "Po et " + adversaire.inventaire.cle +" clé(s)");
        this.xp += adversaire.valeur;
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cle += adversaire.inventaire.cle;
        break;
      }
      adversaire.attaquer(this);
    }

};

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function (nom, sante, force, race, valeur){
  this.initPerso(nom,sante,force);
  this.race = race;
  this.valeur = valeur;
};

Adversaire.decrire = function (nom, sante, force, race, valeur,or,cle) {
  console.log("Il a " + this.sante+ " PV et "+this.force+" points de force(s)."+
  "Le tuer rapporte " + this.valeur + " XP. \nButin : "+ this.inventaire.or + " Po\n"+this.inventaire.cle+" clé(s)");
}

var joueur1 = Object.create(Joueur);
var joueur2 = Object.create(Joueur);
var nomJoueur1 = prompt("Saisissez le nom de votre premier héro (dps) : ");
var nomJoueur2 = prompt("Saisissez le nom de votre deuxième héro (tank): ");
joueur1.initJoueur(nomJoueur1,150,35,10,1);
joueur2.initJoueur(nomJoueur2,200,15,10,1);

var monstre1 = Object.create(Adversaire);
var monstre2 = Object.create(Adversaire);
monstre1.initAdversaire("ZogZog",150,35,"Orc",10,2,1);
monstre2.initAdversaire("Zwalaf",80,5,"Gobelin",5,1,1);
console.log("Bienvenue dans ce jeu d'aventure, voici nos deux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());
console.log("Un monstre pop ! C'est un " + monstre1.race+" nommé " + monstre1.nom );
monstre1.decrire();

joueur1.combattre(monstre1);
joueur2.combattre(monstre1);
console.log(joueur1.decrire());
console.log(joueur2.decrire());
