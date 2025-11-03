// 3. Napisati funkciju numSelectString koja prima niz brojeva i vraca string. U ovoj funkciji treba
// iskoristiti JS funkcije filter, sort i reduce kako bi se kao povrat dobio string koji sadrzi samo
// neparne brojeve iz niza, odvojene zarezom koji su poredani uzlazno. Npr. za niz [17, 34, 3, 12, 23]
// povrat je string „3, 17, 23”.

function numSelectString(arr){
    return arr
        .filter(n => n % 2 == 1)
        .sort((a, b) => a - b)
        .reduce((str, n) => str === "" ? n.toString() : str + " ," + n, "");
}

arr = [17, 34, 3, 12, 23];

console.log(numSelectString(arr));