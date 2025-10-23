// 1. Napisati funkciju vecina() koja kao argument prima niz i callback funkciju. Callback funkcija će
// vratiti true ili false. Funkcija vecina() će iterirati kroz niz i pozivati callback funkciju nad svakim
// elementom dokle god se ne može odrediti je li većina elemenata true . Ako je broj true povratnih
// vrijednosti, manji ili jednak broju false povratnih vrijednosti, funkcija vecina() vraća false. U
// protivnom vraća true.

function provjeriTip(value){
    return typeof value === 'string';
}


function vecina(niz, callback){
    let brTrue = 0;
    let brFalse = 0;

    for(const elem of niz){
        if(callback(elem)){
            brTrue++;
        } else{
            brFalse++;
        }

        if(brFalse > niz.length/2){
            return false;
        }
        if(brTrue > niz.length/2){
            return true;
        }
    }
    return brTrue > brFalse;
}


niz1 = ["a", 1, 5.4, true, "cat"];
niz2 = ["a", 1, 5.4, true, "cat", "car", true, "object", "l"];

console.log(vecina(niz1, provjeriTip));
console.log(vecina(niz2, provjeriTip));