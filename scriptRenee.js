


function Klant(naam,voornaam,klantnummer,adres,){
    this.naam = naam;
    this.voornaam = voornaam;
    this.klantnummer = klantnummer;
    this.adres = adres;

}

function Medewerker(naam,nummer,functie){
    this.naam = naam;
    this.nummer = nummer;
    this.functie = functie;


}

function Fiets(merk,type,electrisch){
    this.merk = merk;
    this.type = type;
    this.electrisch = electrisch;
}

function Accesoire(naam){
    this.naam = naam;
}

var klanten = [
    new Klant("Weasley", "Ron", 1, "Den Haag"),
    new Klant("Skywalker", "Pad-Me", 2, "Rijswijk"),
    new Klant("Kent", "Clark", 3, "Zoetermeer"),
    new Klant("Prince", "Diana", 4, "Wassenaar"),
    new Klant("Sanchez", "Rick", 5, "Scheveningen"),
]

var medewerkers = [
    new Medewerker("Ikora",236,"Directeur"),
    new Medewerker("Cayde-6", 006, "Monteur"),
    new Medewerker("Zavala",237,"Balie"),
    new Medewerker("Lord Shaxx", 332, "Monteur"),
    new Medewerker("Xur", 159, "Balie")
]

var fietsen = [
    new Fiets ("YT-1300 light","Dames", false),
    new Fiets ("Star Destroyer", "Heren", false),
    new Fiets ("Tie-fighter", "Dames", true),
    new Fiets ("Imperial shuttle", "Heren", true),
    new Fiets ("USS Phoenix", "Dames", false)
]


/*--------------------------------------------------MEDEWERKERS-----------------------------------------------------------*/
const drop = document.getElementById('knop-medewerker');
//const test = document.getElementById('mederwerker');
//test.innerHTML = medewerkers[0].naam;

//var gegevens = document.getElementById('medewerker').innerHTML;
//gegevens = medewerkers[0];


//Function(){
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){
        let status = document.getElementById('medewerkerDropDown');



        var ophaalKnop = document.getElementById('knop-medewerker');
        ophaalKnop.disabled = true;

        status.addEventListener('change', function(){
            if (status.value === "") {
                ophaalKnop.disabled = true;
            }else{
                ophaalKnop.disabled = false;
            }
        });


        function haalGegevens() {

            let deKeuze = status.value;

            if (deKeuze === "nul") {
                console.log("dit is de eerste optie")
            } else if (deKeuze === "een") {
                console.log("de 2e optieeee!")
            } else if (deKeuze === "twee") {
                console.log("numerrrrrr drieieieieiei")
            } else if (deKeuze === "drie") {
                console.log("jawelll nummer vier")
            } else {
                console.log("ken niet anders dan vijf want je kunt niet op de knop drukken als en kies een optie staat!")
            };
        }

        
        drop.addEventListener("click", haalGegevens, false);



    })
//}



    
   
    
    




/*--------------------------------------------------LOG IN -----------------------------------------------------------*/
