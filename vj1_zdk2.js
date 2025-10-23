// 2. Napisati funkciju prioritiziraj() koja prima niz i callback. Callback funkcija će vratiti true ili false.
// Funkcija prioritiziraj() će iterirati kroz niz i pozvati callback funkciju nad svakim elementom.
// Funkcija prioritiziraj() će vratiti novi niz u kojem su u prvom dijelu niza svi oni elementi za koje je
// callback vratila true, a u drugom dijelu svi oni elementi za koje je callback funkcija vratila false.
// Proučiti funkciju Array.unshift().


function provjeriParnost(value){
    return value % 2 == 0;
}

function prioritiziraj(niz, callback){
    const rezultat = []

    for(const elem of niz){
        if(callback(elem)){
            rezultat.unshift(elem)
        } else{
            rezultat.push(elem);
        }
    }

    return rezultat;
}

niz = [1, 2, 3, 4, 5, 6, 7];

console.log(prioritiziraj(niz, provjeriParnost));