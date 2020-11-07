
function Fietsen(merk,type,soort,hoogte,aantal){
    this.merk = merk;
    this.type = type;
    this.soort = soort;
    this.hoogte = hoogte;
    this.aantal = aantal;   
}

// this.foto  

let soortenFietsen = [
    new Fietsen("Van Moof", "X01", "Heren fiets",  62, 12),
    new Fietsen("Koga", "HJC3", "Dames fiets", 51, 6),
    new Fietsen("Speedstep", "Model X", "Elektrische Fiets", 62, 8),
    new Fietsen ("SpeedstepS", "Model Y","Elektrische Super Fiets", 62, 4),
    new Fietsen ("SpeedstepX", "Model Z", "Elektrische Super X Fiets",62, 1)
]; 


// for loop gebruiken om in de dropdown menu het merk van de objecten uit de array
// weer te geven van het soort fiets

var select = document.getElementById("select");

for (var i = 0; i < soortenFietsen.length; i++){
    select[select.length]= new Option(soortenFietsen[i].merk);
};

console.log(soortenFietsen[1]);




// event select waarvoor te gebruiken 
