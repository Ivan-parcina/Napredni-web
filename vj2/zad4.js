// 4. Napisati funkciju koja prima niz i u njoj kreirati for petlju koja iterira kroz elemente niza i vraća
// sumu elemenata.

function suma(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(suma([3, 8, 6, 7])); 

