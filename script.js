const name = "David";
let alter = 15;
let lieblingsHobby = "Kraftsport";

console.log(`Mein Name ist ${name}, ich bin ${alter} Jahre alt. Und mein Lieblingshobby ist ${lieblingsHobby}.`);


function begruessungNachTageszeit(stunde) {
    if (stunde < 6) {
        return "Gute Nacht"
    } else if (stunde >= 6 && stunde <= 11) {
        return "Guten Morgen"
    } else if (stunde >= 12 && stunde <= 17) {
        return "Guten Tag"
    } else if (stunde >= 18 && stunde <= 23) {
        return "Guten Abend"
    } else {
        return "Unbekannte Uhrzeit"
    }
}

const meineInteressen = ["Kraftsport", "Programmieren", "Wrestling schauen"];

function zeigeInteresse(interesse) {
    if (meineInteressen.includes(interesse)) {
        return "Das ist eins meiner Interessen."
    } else {
        return "Das interessiert mich nicht besonders."
    }
}

console.log(begruessungNachTageszeit(5))
console.log(begruessungNachTageszeit(8))
console.log(begruessungNachTageszeit(14))
console.log(begruessungNachTageszeit(21))
console.log(begruessungNachTageszeit(26))

console.log(zeigeInteresse("Kraftsport"))
console.log(zeigeInteresse("Basketball spielen"))

meineInteressen.forEach((interesse) => {
    console.log(`Interesse: ${interesse}`)
})

const karte = document.querySelectorAll(".karte")
karte.forEach((kart) => {
    console.log(kart)
})

// Now I start to change the looks of the Website.

const ueberschrift = document.querySelector("h1")
ueberschrift.textContent = "David - Webentwickler in Ausbildung"

const hervorgehobeneKarte = document.querySelector(".karte")


const button = document.querySelector("#button")
const ausgabe = document.querySelector("#ausgabe")

button.addEventListener("click", () => {
    ausgabe.textContent = "Hallooooo"
    
    hervorgehobeneKarte.classList.toggle("hervorgehoben")
})