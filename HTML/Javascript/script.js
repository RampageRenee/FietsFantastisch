/*--------------------------------------------------TARIK-----------------------------------------------------------*/













/*--------------------------------------------------FILI-----------------------------------------------------------*/


/*--------------------------------------------------AB-----------------------------------------------------------*/


function Fietsen(merk,type,soort,hoogte,aantal){
    this.merk = merk;
    this.type = type;
    this.soort = soort;
    this.hoogte = hoogte;
    this.aantal = aantal;   
}


var soortenFietsen = [
    new Fietsen("Van Moof", "X01", "Heren fiets",  62, 12),
    new Fietsen("Koga", "HJC3", "Dames fiets", 51, 6),
    new Fietsen("Speedstep", "Model X", "Elektrische Fiets", 62, 8),
    new Fietsen ("Speedstep", "Model Y","Elektrische Super Fiets", 62, 4),
    new Fietsen ("Speedstep", "Model Z", "Elektrische Super X Fiets",62, 1)
]; 


console.log(soortenFietsen[2].merk);



// Geen idee hoe de dropdown menu te creeren in javascript, staat hier ergens meer uitleg over?
// Kan het niet terug vinden in de linked in course of de aangereikte matriaalen

/*-------------------------------------------------RENEE-----------------------------------------------------------*/


function Klant(naam, voornaam, klantnummer, adres,) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.klantnummer = klantnummer;
    this.adres = adres;

}

function Medewerker(naam, nummer, functie) {
    this.naam = naam;
    this.nummer = nummer;
    this.functie = functie;
}


var klanten = [
    new Klant("Weasley", "Ron", 1, "Den Haag"),
    new Klant("Skywalker", "Pad-Me", 2, "Rijswijk"),
    new Klant("Kent", "Clark", 3, "Zoetermeer"),
    new Klant("Prince", "Diana", 4, "Wassenaar"),
    new Klant("Sanchez", "Rick", 5, "Scheveningen"),
]

var medewerkers = [
    new Medewerker("Ikora", 236, "Directeur"),
    new Medewerker("Cayde-6", 006, "Monteur"),
    new Medewerker("Zavala", 237, "Balie"),
    new Medewerker("Lord Shaxx", 332, "Monteur"),
    new Medewerker("Xur", 159, "Balie")
]


/*--------------------------------------------------MEDEWERKERS-----------------------------------------------------------*/
const drop = document.getElementById('knop-medewerker');

//const test = document.getElementById('mederwerker');
//test.innerHTML = medewerkers[3].naam;

//-----------------------------verander[0] in let uit click value event--------------heel onderstaand dan ook in plaatsen (local)
var pony = medewerkers[0].naam;
var paard = medewerkers[0].nummer;
var eekhoorn = medewerkers[0].functie;
document.getElementById('medewerker-naam').innerHTML = pony;
document.getElementById('medewerker-nummer').innerHTML = paard;
document.getElementById('medewerker-functie').innerHTML = eekhoorn;

console.log(medewerkers[0]);
console.log(medewerkers[1]);
console.log(medewerkers[2]);


const keuzeBalk = document.getElementById("medewerkerDropDown");
//function
for (var i = 0; i < medewerkers.length; ++i){
    keuzeBalk[keuzeBalk.length]= new Option(medewerkers[i].naam,medewerkers[i]);
}
///eventlistner click , that  i  innerhtml id naam, id nummer , id functie



document.addEventListener('click', function(){
    let testties = keuzeBalk.value;
    console.log(testties);

    let probeer = testties.value;
    console.log (probeer);
  
})

//Function(){
"use strict";
/*
document.addEventListener('DOMContentLoaded', function () {
    let status = document.getElementById('medewerkerDropDown');



    var ophaalKnop = document.getElementById('knop-medewerker');
    ophaalKnop.disabled = true;

    status.addEventListener('change', function () {
        if (status.value === "") {
            ophaalKnop.disabled = true;
        } else {
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

----*/
var deNaam = document.getElementById('med-naam-input');
var hetNummer = document.getElementById('med-nummer-input');
var deFunctie = document.getElementById('med-functie-input');

function voegtoe(){
    let alles = deNaam +","+  hetNummer + "," + deFunctie;
    medewerkers.push(new Medewerker(alles));
}

var medVerzend = document.getElementById('med-verzendknop');
medVerzend.addEventListener('submit', voegtoe);
//////////////////STOP DE RELOAD overrideofzo wat was het ookalweer???

/*----------------------------------------Contact----------------------------------------------------------*/

var bMapSleutel = "Ao4NiMukSnNPQLargdtRVYiiHxyulxPzCGCxSF7CJWNO7BkFipffBSgPFvwbp68C";
var map;
function GetMap() {

    var bikerHfd = new Microsoft.Maps.Location(25.689866, 32.637105)

    map = new Microsoft.Maps.Map('#myMap', {
        //credentials: 'Your Bing Maps Key',
        center: bikerHfd,
        mapTypeId: Microsoft.Maps.MapTypeId.canvasLight,
        zoom: 12
    });

    //Create an infobox at the center of the map but don't show it.
    var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);


    var pin = new Microsoft.Maps.Pushpin(bikerHfd, {
        title: 'Biker Hoofd Locatie',
        subTitle: 'City Center',

    });
    pin.metadata = {
        title: 'Biker Hoofd Locatie',
        description: 'El Sina Street 22, 85951 Luxor'
    };

    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
    //Add the pushpin to the map
    map.entities.push(pin);

    function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
}




/*--------------------------------------------------LOG IN -----------------------------------------------------------*/

const box = document.getElementById("passzichtbaar");

box = console.log("nu dan??");


box.addEventListener("change", e => {
    let veld = document.getElementById("veld2");

    veld.type = e.target.checked ? "text" : "password"

    //if (e.target.checked){
    //  veld.type = "text"

    //}
})