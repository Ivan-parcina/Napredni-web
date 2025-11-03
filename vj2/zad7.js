// 7. Kreirati funkciju blackJack koja prima niz (brojevi od 1 do 11) i vraca funkciju (nazovimo je
// dealer). Funkcija dealer prima dva argumenta (dva broja) i vraca funkciju (nazovimo je player). Ako
// je funkcija player pozvana PRVI PUT, vraca sumu brojeva koji su argumenti funkcije dealer. Ako je
// funkcija player pozvana DRUGI PUT, vratiti ce sumu ranija dva argumenta i prvog clana niza,
// ukoliko je suma manja ili jednaka 21. Ako je veca od 21, funkcija player vraca string „bust!”.
// Ukoliko prethodna suma nije veca od 21, tada ce se svakim sljedecim pozivom funkcije player
// vratiti nova suma - zbroj posljednje sume i sljedeceg broja u nizu koji je prosljedjen funkciji
// blackJack. Ukoliko je nova suma veca od 21, povrat funkcije player je „bust!”. Ako je funkcija
// player vratila string „bust!”, tada ce svaki sljedeci poziv funcije player vratiti string „You are
// done!”. Ideja ovog zadatka je koristenje i shvacanje koncepta closure, te ga je obavezno korisiti.

function blackJack(deck){
    return function dealer(a, b){
        let firstCall = true;
        let index = 0;
        let sum = a + b;
        let bust = false;

        return function player(){
            if (!firstCall){
                firstCall = false;
                return sum;
            }

            if(bust) return "You are done!";

            if(index < deck.length){
                sum += deck[index];
                index++;
            }

            if(sum > 21) {
                bust = true;
                return "bust!";
            }

            return sum;
        }
    }
}

const deck = [5, 2, 6, 1]; 
const dealer = blackJack(deck);

const player = dealer(6, 7);

console.log(player());
console.log(player());
console.log(player());
console.log(player());
console.log(player());
