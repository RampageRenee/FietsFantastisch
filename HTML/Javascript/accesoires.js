<<<<<<< HEAD
// script door tarik

function accesoires(merk,soort,type,image){
    this.merk = merk;
    this.soort = soort;
    this.type = type;
    this.image = image;
}


const soortenaccesoires = [
    new accesoires("Samsonite","kinderzitje","Model a","image/kinderzitje.jpg"),
    new accesoires("AXA","fietsslot","Model b","image/fietsslotenfoto.jpg"),
    new accesoires("M WAVE","zijwielen","Model c","image/zijwieltjes.jpg"),
    new accesoires("YEPP","windscherm","Model e","image/windschermfietsfoto.jpg"),
    new accesoires("Ventura","helm","Model f","images/pedelec_2.0_fietshelm.jpg"),
];

document.getElementById("accesoiresMerk").innerHTML = soortenaccesoires[0].merk;
document.getElementById("accesoiresSoort").innerHTML = soortenaccesoires[0].soort;
voegFotoToe(0); 

function hetDropDownMenu(){
    var y = document.getElementById("dropDownMenu").value; 
            document.getElementById("accesoiresMerk").innerHTML = soortenaccesoires[y].merk;
            document.getElementById("accesoiresSoort").innerHTML = soortenaccesoires[y].soort;
            voegFotoToe(y);
}

function voegFotoToe(y){
    document.getElementById("accessoiresFoto").innerHTML="";
    var img = document.createElement("img");
    img.src = soortenaccesoires[y].image;
    var src = document.getElementById("accessoiresFoto");
    src.appendChild(img);
}
=======
// script accesoires gemaakt door tarik
>>>>>>> 631480f8e896f2e04f935db1a572e29a25f08506
