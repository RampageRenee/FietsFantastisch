// script fietsen pagina gemaakt door AB
// constructor voor fietsen
function Fietsen(merk,type,soort,hoogte,aantal,image){
    this.merk = merk;
    this.type = type;
    this.soort = soort;
    this.hoogte = hoogte;
    this.aantal = aantal;   
    this.image = image;
}

// array met de Fiets objects
const SOORTENFIETSEN = [
    new Fietsen("Van Moof", "X01", "Heren fiets",  62, 12, "images/herenfiets.jpg"),
    new Fietsen("Koga", "HJC3", "Dames fiets", 51, 6,  "images/damesfiets.jpg"),
    new Fietsen("Speedstep", "Model X", "Elektrische Fiets", 62, 8,  "images/Elektrischefiets.jpg"),
    new Fietsen ("SpeedstepS", "Model Y","Elektrische Super Fiets", 62, 4, "images/Elektrischefiets.jpg"),
    new Fietsen ("SpeedstepX", "Model Z", "Elektrische Super X Fiets",62, 1, "images/Elektrischefiets.jpg")
]; 

// Om een default te kunnen weergegeven, het eerste object uit de array
document.getElementById("fietsMerk").innerHTML = SOORTENFIETSEN[0].merk;
document.getElementById("fietsType").innerHTML = SOORTENFIETSEN[0].type;
voegFotoToe(0); 

//functie voor het weergeven van de objecten uit de geschreven array 
function hetDropDownMenu(){
    var y = document.getElementById("dropDownMenu").value; 
            document.getElementById("fietsMerk").innerHTML = SOORTENFIETSEN[y].merk;
            document.getElementById("fietsType").innerHTML = SOORTENFIETSEN[y].type;
            voegFotoToe(y);
}

// functie voor het toevoegen van de images
function voegFotoToe(y){
    document.getElementById("fietsFoto").innerHTML="";
    var img = document.createElement("img");
    img.src = SOORTENFIETSEN[y].image;
    var src = document.getElementById("fietsFoto");
    src.appendChild(img);
}


// Toevoegen van een object via het verzendformulier
const verzend = document.getElementById('verzendFormulier')
verzend.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = new FormData(verzend);
    var fiets = new Fietsen(data.get('merk'),data.get('soort'),data.get('type'),data.get('hoogte'),data.get('aantal'));
    checkFiets(fiets);
});   


//Voor het controleren of er al een object in soorten fietsen bestaat
function checkFiets(fiets) {
    const gevonden = SOORTENFIETSEN.some(fietsInhoud => fietsInhoud.merk === fiets.merk)
    if(!gevonden) {
        SOORTENFIETSEN.push(fiets);
        alert("De fiets: " + fiets.merk + " is toegevoegd aan ons bestand"); 
        console.log(fiets);
    } else {
        alert("De fiets: " + fiets.merk + " bestaat al.");
    }
}

















