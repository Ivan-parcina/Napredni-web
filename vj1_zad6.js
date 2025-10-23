// 6. Napisati svoju verziju JS funkcije reduce(). Funkcija prima 3 argumenta:- Niz- Callback funkciju
// koja će se primjeniti na svaki član niza- Akumulator koji će se vratiti, kao rezultat pozivanja
// callback funkcije na sve članove niza. Za razliku od funkcije map, reduce ne vraća niz rezultata (za
// svaki element), već jedan zajednički rezultat (akumulator).
// Primjerice za niz [1, 2, 3, 4, 5] i callback funkciju zbroji(), rezultat funkcije reduce je 15.
// reduce([1, 2, 3, 4, 5], (acc, elem)=>acc+elem, 0);

function zbroji(value1, value2){
    return value1 + value2;
}

function myreduce(niz, callback, acc){
    for(const elem of niz){
        acc = callback(acc, elem); 
    }

    return acc;
}

console.log(myreduce([1, 2, 3, 4, 5], zbroji, 0));