// 17. Niže je naveden objekt fakePeople koji imitira podatke izvučene iz baze podataka. Napisati
// funkciju fakeAPICall(i) koja vraća promise koji će se resolve-ati u podatke osobe na i-tom mjestu.
// Promise resolve-ati nakon random broja milisekundi između 1000 i 3000. Napisati funkciju
// getAllData, koja koristi Promise.all kako bi se 3 API poziva fakeAPICall(i) izvršila istovremeno.
// Argument i odabrati proizvoljno. U slučaju da je i veći od 3, reject-ati promise.
// Promise.all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// const fakePeople = [
// { name: 'Ivo', hasPets: false},
// { name: 'Eva', hasPets: true},
// { name: 'Marko', hasPets: true} ] 

function fakeAPICall(i) {
  return new Promise((resolve, reject) => {
    if (i > 2) {
      reject("Index out of range");
      return;
    }
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    setTimeout(() => {
      resolve(fakePeople[i]);
    }, delay);
  });
}

function getAllData() {
  const promises = [
    fakeAPICall(0),
    fakeAPICall(1),
    fakeAPICall(2)
  ];

  Promise.all(promises)
    .then(results => {
      console.log("Svi podaci:", results);
    })
    .catch(err => {
      console.log("Došlo je do greške:", err);
    });
}

const fakePeople = [
{ name: 'Ivo', hasPets: false},
{ name: 'Eva', hasPets: true},
{ name: 'Marko', hasPets: true} ];

getAllData();

