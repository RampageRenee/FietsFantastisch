

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
const keuzeBalk = document.getElementById("medewerkerDropDown");





//-----------------GEGEVENS VAN MEDEWERKER------------verander[0] in let uit click value event--------------heel onderstaand dan ook in plaatsen (local)
var pony = medewerkers[0].naam;
var paard = medewerkers[0].nummer;
var eekhoorn = medewerkers[0].functie;
document.getElementById('medewerker-naam').innerHTML = pony;
document.getElementById('medewerker-nummer').innerHTML = paard;
document.getElementById('medewerker-functie').innerHTML = eekhoorn;

var medSleutel = medewerkers.keys();







//-----------------dropdown loop met toekomst op dynamiek
for (var i = 0; i < medewerkers.length; ++i) {
    let a = medewerkers[i].naam;
    let b = medewerkers[i];
    keuzeBalk[keuzeBalk.length] = new Option(a, b);
    console.log(a);
    console.log(b);
    var z= a;
    
    function Jeezus (){
    addEventListener('select' ,function(){
        var pakLijstNummer = z;
        return pakLijstNummer;
    })
    }

}


///eventlistner click , that  i  innerhtml id naam, id nummer , id functie
console.log(Option);

// function geefMedLijst(lijstVanSleutels){
//     let waardeSelectie = lijstVanSleutels;
//     if(empty(waardeSelectie)){
//         document.getElementById('medewerkerDropDown').value;
//     }
//     pony;
//     paard;
//     eekhoorn;
// }



keuzeBalk.addEventListener('change', function () {
    let testties = z;
    console.log(testties);

    
    //return geefMedLijst();
    //for (let [key, value] of Object.entries(testties)) {  console.log(key,value) };

    //let probeer = [testties].naam;
    //console.log(probeer);

})





//------------------------Maak een nieuwe medewerker aan--------------------------

var deNaam = document.getElementById('med-naam-input').value;
var hetNummer = document.getElementById('med-nummer-input').value;
var deFunctie = document.getElementById('med-functie-input').value;

function voegtoe() {
    let naam = deNaam;
    let num = hetNummer;
    let func = deFunctie;
    medewerkers.push(new Medewerker(naam,num,func));
}

var medVerzend = document.getElementById('med-verzendknop');
medVerzend.addEventListener('onclick', voegtoe);












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

//const box = document.getElementById("passzichtbaar");

//box = console.log("nu dan??");


box.addEventListener("change", e => {
    let veld = document.getElementById("veld2");

    veld.type = e.target.checked ? "text" : "password"

    //if (e.target.checked){
    //  veld.type = "text"

    //}
})