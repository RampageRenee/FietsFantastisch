//MedewerkerTest = document.querySelector(".medewerker");

//document.querySelector(".medewerker").innerHTML =   medewerkers[0];

//MedewerkerTest.getAttribute(medewerker[0]);
//MedewerkerTest (Medewerker[0]);




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



// document.querySelector(".medewerker").toString(Medewerkers[0]);


var probeer = document.querySelector(".medewerker");

probeer.innerHTML = "Gegevens van Medewerker: "+ medewerkers[0];
