var contacts=[]; //Initialisation du tableau

var contact = { //Objet contact

   creer : function(nom, prenom){
     this.nom = nom;
     this.prenom = prenom;
   },
   decrire : function(nom, prenom){
     var description = prenom + " " + nom;
   }
}


console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : quitter");

var choix = prompt("Choisissez une option : ");
console.log(choix);
while(choix !== 0 ){
  if (choix == 1){
    for(i=0;i<contacts.length;i++){
      console.log(contacts[i].decrire());
    }
  }else if (choix ==2){
    var nom_c = prompt("Saissez le nom du nouveau contact : ");
    var prenom_c = prompt("Saisissez le prénom du nouveau contact : ");
    var nouveauContact = Object.create(contact);
    nouveauContact.creer(nom_c, prenom_c);
    contacts.push(nouveauContact);
  }else{
    console.log("Option inexistante. veuillez raffraichir la page.");
  }
}console.log("A bientot ! ");
