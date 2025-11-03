// 2. Napisati funkciju movieSelector koja prima niz objekata koji sadrze informacije o filmovima (id,
// title i score). Iskoristiti JS funkcije filter i map kako bi povrat funkcije movieSelector bio niz koji
// sadrzi samo imena filmova sa score-om vecim od pet i to uppercase-ane. Primjer za objekt:
// movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
// { id: 37, title: "Gentelman", score: 6 },
// { id: 11, title: "Batman", score: 5 },
// { id: 44, title: "Birds of Pray", score: 1 },];
// ocekivani rezultat je: [ "PAN'S LABYRINTH", "GENTELMAN" ]

function movieSelector(arr){
    arr = arr.filter(a => a.score > 5);
    arr = arr.map(a => a.title.toUpperCase());
    //arr.filter(a => a.score > 5).map(a => a.title.toUpperCase())
    return arr;
}


movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
{ id: 37, title: "Gentelman", score: 6 },
{ id: 11, title: "Batman", score: 5 },
{ id: 44, title: "Birds of Pray", score: 1 },];

console.log(movieSelector(movies));