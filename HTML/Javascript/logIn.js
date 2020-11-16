
/*--------------------------------------------------LOG IN --------MADE BY RENEE---------------------------------------------------*/
const drop = document.getElementById('knop-medewerker');
//const box = document.getElementById("passzichtbaar");

//box = console.log("nu dan??");


box.addEventListener("change", e => {
    let veld = document.getElementById("veld2");

    veld.type = e.target.checked ? "text" : "password"

    //if (e.target.checked){
    //  veld.type = "text"

    //}
})