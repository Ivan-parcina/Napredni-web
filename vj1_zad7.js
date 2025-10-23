// 7. Napisati svoju izvedbu funkcije filter(). Funkcija prima dva argumenta:- Ulazni Niz- Callback
// funkciju koja će se primjeniti na svaki element ulaznog niza, te će vratiti true ili false, na osnovu
// čega će se element odati u povratni niz (odnosno neće). Funkcija vraca povratni niz sa elementima
// koji su prosli filtriranje 

function provjeriParnost(value){
    return value % 2 == 0;
}

function myfilter(niz, callback){
    for(let i = niz.length; i >= 0; i--){
        if(!callback(niz[i])){
            niz.splice(i, 1);
        }
    }

    return niz;
}

console.log(myfilter([1, 2, 3, 4, 5, 6], provjeriParnost));