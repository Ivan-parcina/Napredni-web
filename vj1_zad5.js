// 5. Kreirati funkciju pipe() koja prima niz (i to niz funkcija) i jednu vrijednost. Funkcija pipe()
// vrijednost ubacuje u prvu funkciju u nizu, te njen rezultat ubacuje u drugu funkciju u nizu, pa njen
// rezultat u treću i tako do zadnje funkcije u nizu. Funkcija pipe() vraća konačni rezultat.


function add1(x) {
    return x + 1;
}

function add0(x) {
    return x + 0;
}

function multiply2(x) {
    return x * 2;
}

function pipe(niz, value){
    rezultat = value;

    for(const funkcija of niz){
        rezultat = funkcija(rezultat);
    }

    return rezultat;
}

niz = [add1, add0, multiply2];

console.log(pipe(niz, 5));