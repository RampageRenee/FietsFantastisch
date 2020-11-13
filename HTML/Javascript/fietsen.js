// script voor fietsen pagina gemaakt door ab
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
const soortenFietsen = [
    new Fietsen("Van Moof", "X01", "Heren fiets",  62, 12, "images/herenfiets.jpg"),
    new Fietsen("Koga", "HJC3", "Dames fiets", 51, 6,  "images/damesfiets.jpg"),
    new Fietsen("Speedstep", "Model X", "Elektrische Fiets", 62, 8,  "images/Elektrischefiets.jpg"),
    new Fietsen ("SpeedstepS", "Model Y","Elektrische Super Fiets", 62, 4, "images/Elektrischefiets.jpg"),
    new Fietsen ("SpeedstepX", "Model Z", "Elektrische Super X Fiets",62, 1, "images/Elektrischefiets.jpg")
]; 

// Om een default te kunnen weergegeven, het eerste object uit de array
document.getElementById("fietsMerk").innerHTML = soortenFietsen[0].merk;
document.getElementById("fietsType").innerHTML = soortenFietsen[0].type;
voegFotoToe(0); 

//functie voor het weergeven van de objecten uit de geschreven array 
function hetDropDownMenu(){
    var y = document.getElementById("dropDownMenu").value; 
    let gevonden = false;
    let i = 0;
    while (!gevonden){
        if(i==y){
            document.getElementById("fietsMerk").innerHTML = soortenFietsen[i].merk;
            document.getElementById("fietsType").innerHTML = soortenFietsen[i].type;
            voegFotoToe(i);
            gevonden = true;
        }
        i++;
    }
}

// functie voor het toevoegen van de images
function voegFotoToe(y){
    document.getElementById("fietsFoto").innerHTML="";
    var img = document.createElement("img");
    img.src = soortenFietsen[y].image;
    var src = document.getElementById("fietsFoto");
    src.appendChild(img);
}

const voegObjectToe = () => {

}
//.push 





// for loop gebruiken om in de dropdown menu het merk van de objecten uit de array
// weer te geven van het soort fiets


// const select = document.getElementById("select");

// for (var i = 0; i < soortenFietsen.length; i++){
//     select[select.length] = new Option(soortenFietsen[i].soort);
// };


// console.log(soortenFietsen[1]);

// let resultaat = document.getElementById('')


// arrow function om het resultaat weer te gegeven hierin dus zorgen dat er 1 resultaat naar boven komt 
// += voegt het resultaat toe aan de variable fietsen


// function getWaarden(){
//     var fietsen = "";
//     soortenFietsen.forEach((element) => {
//             fietsen += "<span>" + element.merk + "<br>" + element.image + "<br>" + "</span>";
//         }
//     );
//     document.getElementById('showresults').innerHTML = fietsen;
    
// }

// Dynamische Javascript hierboven maar moet nog verder uitgewerkt worden
// Hieronder de hardcoded Javascript