// 15. Kreirati promise koji će se odmah reject-ati. Iz funkcije koja se pozvala kada je promise rejectan printati „Error“(hint. nad promise objektom pozvati metodu catch).

const myPromise = new Promise((resolve, reject) => {
    reject("Rejected");
});

myPromise.then((succ) => {
    console.log("Success") //Nece se nikad izvrsit
}).catch((err) => {
    console.log("Error");
});