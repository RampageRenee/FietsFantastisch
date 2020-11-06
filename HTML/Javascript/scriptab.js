


function Fietsen(merk,type,soort,hoogte,aantal){
    this.merk = merk;
    this.type = type;
    this.soort = soort;
    this.hoogte = hoogte;
    this.aantal = aantal;   
}

// this.foto  


var soortenFietsen = [
    new Fietsen("Van Moof", "X01", "Heren fiets",  62, 12),
    new Fietsen("Koga", "HJC3", "Dames fiets", 51, 6),
    new Fietsen("Speedstep", "Model X", "Elektrische Fiets", 62, 8),
    new Fietsen ("Speedstep", "Model Y","Elektrische Super Fiets", 62, 4),
    new Fietsen ("Speedstep", "Model Z", "Elektrische Super X Fiets",62, 1)
]; 


console.log(soortenFietsen[2].merk);

// event select waarvoor te gebruiken 
// 


// Geen idee hoe de dropdown menu te creeren in javascript, staat hier ergens meer uitleg over?
// Kan het niet terug vinden in de linked in course of de aangereikte matriaalen
