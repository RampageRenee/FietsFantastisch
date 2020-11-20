


// for loop gebruiken om in de dropdown menu het merk van de objecten uit de array
// weer te geven van het soort fiets


const select = document.getElementById("select");

for (var i = 0; i < soortenFietsen.length; i++){
    select[select.length] = new Option(soortenFietsen[i].soort);
};


// console.log(soortenFietsen[1]);

// let resultaat = document.getElementById('')


// arrow function om het resultaat weer te gegeven hierin dus zorgen dat er 1 resultaat naar boven komt 
// += voegt het resultaat toe aan de variable fietsen


function getWaarden(){
    var fietsen = "";
    soortenFietsen.forEach((element) => {
            fietsen += "<span>" + element.merk + "<br>" + element.image + "<br>" + "</span>";
        }
    );
    document.getElementById('showresults').innerHTML = fietsen;
    
}

// Dynamische Javascript hierboven maar moet nog verder uitgewerkt worden