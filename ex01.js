let annee = 2023;
let dtNaissance = 2000;
let age = annee - dtNaissance;
let majorite = 18;

if(age < majorite){
    console.log("vous etes mineur. votre age est" + age + "ans" );
}
else{
    console.log("vous etes majeur. votre age est: " + age + "ans");
}