// 6. Kreirati funkciju russianRoulette koja prima jedan argument (broj, nazovimo ga n), i vraca
// funkciju. Vracena funkcija ne prima argumente, a vraca stirng „click!” prvih n – 1 poziva. Prilikom
// n-tog poziva, funkcija ce vratiti string „bang”. Svakim sljedecim pozivom funkcije, povratna
// vrijednost ce biti string „reload to play again”. (hint „closure”)

function russianRoulette(n){
    let counter = 0;
    return function(){
        counter++;
        if(counter < n) return "click!";
        if(counter == n) return "bang!";
        return "reload to play again!";
    };
}


const play = russianRoulette(4);

console.log(play());
console.log(play());
console.log(play());
console.log(play());
console.log(play());