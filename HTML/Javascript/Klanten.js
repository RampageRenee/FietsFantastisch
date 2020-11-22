// script klanten gemaakt door fili  met aanwijzingen van renee door tijdsgebrek

const KLANTDROP = document.getElementById("klantDropDown");


function Klant(naam, voornaam, klantnummer, adres, image) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.klantnummer = klantnummer;
    this.adres = adres;
    this.image = image;

}

var klanten = [
    new Klant("Weasley", "Ron", "001", "Den Haag",   "images/Klant-Ron.jpg"  ),
    new Klant("Skywalker", "Pad-Me", 2, "Rijswijk",   "images/Klant-Padme.jpg"  ),
    new Klant("Kent", "Clark", 3, "Zoetermeer",   "images/Klant-Clark.jpg" ),
    new Klant("Prince", "Diana", 4, "Wassenaar",  "images/Klant-Diana.jpg"  ),
    new Klant("Sanchez", "Rick", 5, "Scheveningen",  "images/Klant-rick.jpg" ),
]

var klnaam = klanten[0].naam;
var klvoornaam = klanten[0].voornaam;
var klnummer = klanten[0].klantnummer;
var kladres = klanten[0].adres;


document.getElementById('klant-naam').innerHTML = klnaam;
document.getElementById('klant-voornaam').innerHTML = klvoornaam;
document.getElementById('klant-nummer').innerHTML = klnummer;
document.getElementById('klant-adres').innerHTML = kladres;




//var klantenDrop = document.getElementById('klant').innerHTML;
//var a = KLANTDROP.value;



function voorDropDownLijst(z){
   var klantNaam = klanten[z].naam;
   var klantVoornaam = klanten[z].voornaam;
   var klantNummer = klanten[z].klantnummer;
   var klantAdres = klanten[z].adres;

    document.getElementById('klant-naam').innerHTML = klantNaam;
    document.getElementById('klant-voornaam').innerHTML = klantVoornaam;
    document.getElementById('klant-nummer').innerHTML = klantNummer;
    document.getElementById('klant-adres').innerHTML = klantAdres;

}

function pakPlaatje(z){
    var klantAfbeelding = klanten[z].image;

    document.getElementById('klFotot').src = klantAfbeelding;
}



for (var i = 0; i< klanten.length; i++){

    var pakElement = document.createElement("option");
    var pakText =document.createTextNode(klanten[i].voornaam);
    pakElement.appendChild(pakText);
    pakElement.setAttribute("value",i);

    document.getElementById('klantDropDown').appendChild(pakElement);

    console.log (pakElement);
}

KLANTDROP.addEventListener('change', function(){

    var e = document.getElementById('klantDropDown');
    var result = e.options[e.selectedIndex].value;

    console.log(result);

    voorDropDownLijst(result);
    pakPlaatje(result);


});



/*-------------------------------------------------------------------------------------------------------*/