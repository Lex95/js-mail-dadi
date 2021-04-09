var mailUtente = prompt("Inserisci la tua mail:");

var mailWhiteList = ["giallo@gmail.com", "rosso@gmail.com", "blu@gmail.com"];

var isAllowed = false;

for (var i = 0; i < mailWhiteList.length; i++) {
    if (mailUtente === mailWhiteList[i]) {
        isAllowed = true;
    }
}

if (isAllowed == true) {
    alert("La mail è corretta!");
}
else {
    alert("La mail non è nella lista!");
}