
// script door tarik

function accesoires(merk,soort,type,image){
    this.merk = merk;
    this.soort = soort;
    this.type = type;
    this.image = image;
}


const soortenaccesoires = [
    new accesoires("Samsonite","kinderzitje","Model a","images/kinderzitje.jpg"),
    new accesoires("AXA","fietsslot","Model b","images/fietsslotenfoto.jpg"),
    new accesoires("M WAVE","zijwielen","Model c","images/zijwieltjes.jpg"),
    new accesoires("YEPP","windscherm","Model e","images/windschermfietsfoto.jpg"),
    new accesoires("Ventura","helm","Model f","images/pedelec_2.0_fietshelm.jpg"),
];

document.getElementById("accesoiresMerk").innerHTML = soortenaccesoires[0].merk;
document.getElementById("accesoiresSoort").innerHTML = soortenaccesoires[0].soort;
voegFotoToe(0); 

function voegFotoToe(y){
    document.getElementById("accessoiresFoto").innerHTML="";
    var img = document.createElement("img");
    img.src = soortenaccesoires[y].image;
    var src = document.getElementById("accessoiresFoto");
    src.appendChild(img);
}

function hetDropDownMenu(){
    var y = document.getElementById("dropDownMenu").value; 
            document.getElementById("accesoiresMerk").innerHTML = soortenaccesoires[y].merk;
            document.getElementById("accesoiresSoort").innerHTML = soortenaccesoires[y].soort;
            voegFotoToe(y);
}

const verzend = document.getElementById('verzendFormulier')

verzend.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = new FormData(verzend);
    var accesoire = new accesoires(data.get('merk'),data.get('soort'),data.get('type'),);
    checkaccesoires(accesoires);
    
function checkaccesoires(accesoires) {
    const gevonden = soortenaccesoires.some(accesoiresInhoud => accesoiresInhoud.merk === accesoires.merk)
    if(!gevonden) {
        soortenaccesoires.push(accesoires);
        alert("De accesoire: " + accesoire.merk + " is toegevoegd"); 
        console.log(accesoires);
    } else {
        alert("De accesoire: " + accesoires.merk + " bestaat al.");
    }
}
});   

// script accesoires gemaakt door tarik
