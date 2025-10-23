// 3. Kreirati funkciju grupiraj() koja prima niz i callback te vraća objekt. Funkcija grupiraj() će
// iterirati kroz niz i izvršiti callback funkciju nad svakim članom. Svaki return funkcije će postati
// ključ u objektu. Vrijednost na svakom ključu će biti niz čiji elementi su rezultat callback obrade.
// Npr. Za niz {1, 2, 3, 4, 5} i cb(input){if (input % 2 == 0) return true;} povratna vrijednost funkcije
// gupiraj() je {true:[2, 4], false:[1, 3, 5]}.

function provjeriParnost(value){
    return value % 2 == 0;
}

function grupiraj(niz, callback){
    const rezultat = {};

    for(const elem of niz){
        const kljuc = callback(elem);
        
        if(!rezultat[kljuc]){
            rezultat[kljuc] = [];
        }

        rezultat[kljuc].push(elem);
    }
    
    return rezultat;
}

niz = [1, 2, 3, 4, 5, 6, 7];

console.table(grupiraj(niz, provjeriParnost));
