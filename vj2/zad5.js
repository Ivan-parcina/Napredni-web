// 5. Napisati funkciju koja kao argument prima niz elemenata, te vraća funkciju koja pri svakom
// pozivu vraća sljedeći član niza sa konkateniranim stringom „je n-ti element niza“. (hint. Closure).

function nextElem(arr){
    let index = 0;
    return function(){
        if(index >= arr.length){
            return "Niz vise nema elemenata";
        }
        const res = `${arr[index]} je ${index + 1}-ti element niza`;
        index++;
        return res;
    };
}

const logNext = nextElem([20, 17, 25]);

console.log(logNext());
console.log(logNext());
console.log(logNext());
console.log(logNext());