var mailUtente = prompt("Inserisci la tua mail:");

var mailWhiteList = ["giallo@gmail.com", "rosso@gmail.com", "blu@gmail.com"];

var isAllowed = false;

for (var i = 0; i < mailWhiteList.length; i++) {
    if (mailUtente === mailWhiteList[i]) {
        isAllowed = true;
    }
}

var dadoUtente = Math.floor(Math.random() * 6) + 1;
var dadoIa = Math.floor(Math.random() * 6) + 1;

if (isAllowed == true) {
    alert("La mail è corretta!");
    if (dadoUtente > dadoIa) {
        document.getElementById("myId").innerHTML= "L'utente " + mailUtente + " ha vinto contro il computer " + dadoUtente + " a " + dadoIa + "!";
    }
    else if (dadoUtente < dadoIa) {
        document.getElementById("myId").innerHTML= "L'utente " + mailUtente + " ha perso contro il computer " + dadoUtente + " a " + dadoIa + "!";
    }
    else {
        document.getElementById("myId").innerHTML= "L'utente " + mailUtente + " e il computer hanno pareggiato con " + dadoUtente + " e " + dadoIa + "!";
    }
}
else {
    alert("La mail non è nella lista!");
    document.getElementById("myId").innerHTML= "Non hai il permesso per poter giocare!";
}