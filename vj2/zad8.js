// 8. Kreirati promise koji će se nakon 1000 ms resolve-ati u string „Resolved“, koristeći metodu
// setTimeout(). Funkcija koja je zadužena za printanje resolved promisa, se prosljeđuje u promise
// preko then() metode.


const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Resolved");
    }, 1000);
});

myPromise.then((message) => {
    console.log(message);
});