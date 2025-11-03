// 16. Promisi su asinhroni i sada ćemo to i dokazati. Kreirati promise koji će se resolve-ati sa
// vrijednošću „Promise has been resolved!“. Nakon toga ubaciti sljedeći kod:
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");
// Koji redosljed ispisa očekujete? Zašto?

const promise = new Promise((resolve, reject) => {
    resolve("Resolved");
});

promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");