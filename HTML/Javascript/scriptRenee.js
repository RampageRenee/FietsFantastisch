


function Klant(naam, voornaam, klantnummer, adres,) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.klantnummer = klantnummer;
    this.adres = adres;

}

function Medewerker(naam, nummer, functie, afbeelding) {
    this.naam = naam;
    this.nummer = nummer;
    this.functie = functie;
    this.afbeelding = afbeelding;
}


var klanten = [
    new Klant("Weasley", "Ron", 1, "Den Haag"),
    new Klant("Skywalker", "Pad-Me", 2, "Rijswijk"),
    new Klant("Kent", "Clark", 3, "Zoetermeer"),
    new Klant("Prince", "Diana", 4, "Wassenaar"),
    new Klant("Sanchez", "Rick", 5, "Scheveningen"),
]

var medewerkers = [
    new Medewerker("Ikora", 236, "Directeur","HTML\images\MED Ikora Rey.jpg"),
    new Medewerker("Cayde-6", 006, "Monteur", "HTML\images\MED Cayde-6, _.jpg"),
    new Medewerker("Zavala", 237, "Balie", "HTML\images\MED Zavala.jpg"),
    new Medewerker("Lord Shaxx", 332, "Monteur", "HTML\images\MED Lord Shaxx.jpg"),
    new Medewerker("Xur", 159, "Balie", "HTML\images\MED Where Is Xur.jpg")
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


// lijstSelectie(2);



function lijstSelectie(z){
    var pony = medewerkers[z].naam;
    var paard = medewerkers[z].nummer;
    var eekhoorn = medewerkers[z].functie;
    document.getElementById('medewerker-naam').innerHTML = pony;
    document.getElementById('medewerker-nummer').innerHTML = paard;
    document.getElementById('medewerker-functie').innerHTML = eekhoorn;
    
}




//-----------------dropdown loop met toekomst op dynamiek
for (var i = 0; i < medewerkers.length; ++i) {
    /*let a = medewerkers[i].naam;
    let b = medewerkers[i];
    keuzeBalk[keuzeBalk.length] = new Option(a, b);
    console.log(a);
    console.log(b);
    var z= a;*/

    var newpickelement = document.createElement("option");
    var newpicktext = document.createTextNode(medewerkers[i].naam);
    newpickelement.appendChild(newpicktext);
    newpickelement.setAttribute("value", i);

    document.getElementById("medewerkerDropDown").appendChild(newpickelement);

    console.log(newpickelement);

    /*function Jeezus (){
    addEventListener('select' ,function(){
        var pakLijstNummer = z;
        return pakLijstNummer;
    })
    }*/

}



keuzeBalk.addEventListener('change', function () {
    


    var e = document.getElementById("medewerkerDropDown");
    var result = e.options[e.selectedIndex].value;

    console.log(result);

    lijstSelectie(result);
    
    

})





//------------------------Maak een nieuwe medewerker aan--------------------------

var deNaam = document.getElementById('med-naam-input').value;
var hetNummer = document.getElementById('med-nummer-input').value;
var deFunctie = document.getElementById('med-functie-input').value;



function voegtoe(e) {
    e.preventDefault();
    
    console.log("Voegtoe functie uitgevoerd");

    var bestaatAl = false;

    for (var i = 0; i < medewerkers.length; ++i) {
        let n = medewerkers[i].naam;
        let m = medewerkers[i].nummer;
        let f = medewerkers[i].functie;
    

        //if (deNaam,hetNummer, deFunctie == n,m,f){
        if(deNaam==n && hetNummer==m && deFunctie==f){
           bestaatAl=true;
           break;
        }
        else{
            
        }
    }

    if (bestaatAl == true) {
        window.alert("medewerker bestaat al, probeer het nogmaals.");
    }
    else {
        medewerkers.push(new Medewerker(deNaam, hetNummer, deFunctie));
        window.alert("Medewerker:" + deNaam + " nummer:" + hetNummer + "functie:" + deFunctie + " is toegevoegd.");
    }
}



document.getElementById("med-verzendknop").onclick = voegtoe;












