// 4. Kreirati funkciju komutativnost() koja prima dvije callback funkcije i vrijednost. Funkcija
// komutativnost() će vratiti true ako prosljeđivanje vrijednosti u prvu callback funkciju i onda
// prenošenje rezultirajuće vrijednost u drugu funkciju, daje isti rezultat kao prenošenje vrijednosti u
// drugu funkciju i prosljeđivanje rezultirajuće vrijednosti u prvu funkciju.

//kumutativnost => f(g(x)) = g(f(x))

function add1(x) {
    return x + 1;
}

function add0(x) {
    return x + 0;
}

function multiply2(x) {
    return x * 2;
}

function komutativnost(f, g, value){
    return f(g(value)) === g(f(value));
}

console.log(komutativnost(add1, add0, 5));       
console.log(komutativnost(add0, multiply2, 5));  
console.log(komutativnost(add1, multiply2, 5));     