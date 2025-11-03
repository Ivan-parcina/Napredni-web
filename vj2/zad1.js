// 1. Napisati funkciju koja vraca funkciju after i prima dva argumenta. Prvi argument je broj koji
// predstavlja koliko puta funkcija after treba biti pozvana prije nego se izvrsi callback funkcija, a
// drugi argument je callback funkcija koja ce se izvrsiti. (hint closure)

function isDone(){
    console.log("Its done!");
}

function after(number, callback){
    let n = 0;
    return function(){
        n++;
        if(n >= number){
            return callback();
        }
    };
}


const call4times = after(4, isDone);

call4times();
call4times();
call4times();
call4times();