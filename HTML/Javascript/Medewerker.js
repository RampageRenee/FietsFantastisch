
/*--------------------------------------------------MEDEWERKERS----------MADE BY RENEE-------------------------------------------------*/



function Medewerker(naam, nummer, functie, afbeelding) {
    this.naam = naam;
    this.nummer = nummer;
    this.functie = functie;
    this.afbeelding = afbeelding;
}


var medewerkers = [
    new Medewerker("Ikora", 236, "Directeur","./images/MED Ikora Rey.jpg"),
    new Medewerker("Cayde-6", 106, "Monteur", "./images/MEDCayde-6.jpg"),
    new Medewerker("Zavala", 237, "Balie", "./images/MED Zavala.jpg"),
    new Medewerker("Lord Shaxx", 332, "Monteur", "./images/MED Lord Shaxx.jpg"),
    new Medewerker("Xur", 159, "Balie", "./images/MED Where Is Xur.jpg")
];


/*--------------------------------------------------MEDEWERKERS-----------------------------------------------------------*/

const keuzeBalk = document.getElementById("medewerkerDropDown");





//-----------------GEGEVENS VAN MEDEWERKER------------verander[0] in let uit click value event--------------heel onderstaand dan ook in plaatsen (local)
/* var pony = medewerkers[0].naam;
var paard = medewerkers[0].nummer;
var eekhoorn = medewerkers[0].functie;
document.getElementById('medewerker-naam').innerHTML = pony;
document.getElementById('medewerker-nummer').innerHTML = paard;
document.getElementById('medewerker-functie').innerHTML = eekhoorn; */


// lijstSelectie(2);



function lijstSelectie(z){
    var naampony = medewerkers[z].naam;
    var nummerpaard = medewerkers[z].nummer;
    var functieeekhoorn = medewerkers[z].functie;
    
    document.getElementById('medewerker-naam').innerHTML = naampony;
    document.getElementById('medewerker-nummer').innerHTML = nummerpaard;
    document.getElementById('medewerker-functie').innerHTML = functieeekhoorn;
    
}

function fotoSelectie(z){
    var plaatje = medewerkers[z].afbeelding;
    document.getElementById('afbeeldingMedewerker').src =plaatje;
}



//-----------------dropdown loop met toekomst op dynamiek
for (var i = 0; i < medewerkers.length; ++i) {
   

    var newpickelement = document.createElement("option");
    var newpicktext = document.createTextNode(medewerkers[i].naam);
    newpickelement.appendChild(newpicktext);
    newpickelement.setAttribute("value", i);

    document.getElementById("medewerkerDropDown").appendChild(newpickelement);

    console.log(newpickelement);

}



keuzeBalk.addEventListener('change', function () {

    var e = document.getElementById("medewerkerDropDown");
    var result = e.options[e.selectedIndex].value;

    console.log(result);

    lijstSelectie(result);
    fotoSelectie(result);
    
});





//------------------------Maak een nieuwe medewerker aan--------------------------




function voegtoe(e) {
    e.preventDefault();
    
    console.log("Voegtoe functie uitgevoerd");

    var bestaatAl = false;

    for (var i = 0; i < medewerkers.length; ++i) {
        let n = medewerkers[i].naam;
        let m = medewerkers[i].nummer;
        let f = medewerkers[i].functie;
    

        
        if(deNaam==n && hetNummer==m && deFunctie==f){
           bestaatAl=true;
           break;
        }
        
    }

    if (bestaatAl == true) {
        window.alert("medewerker bestaat al, probeer het nogmaals.");
    }
    else {
        medewerkers.push(new Medewerker(deNaam, hetNummer, deFunctie));
        window.alert("Medewerker: " + deNaam + ", nummer: " + hetNummer + ", functie: " + deFunctie + " is toegevoegd.");
    }
}



var deNaam = document.getElementById('med-naam-input').value;
var hetNummer = document.getElementById('med-nummer-input').value;
var deFunctie = document.getElementById('med-functie-input').value;


document.getElementById("med-verzendknop").onclick = voegtoe;












