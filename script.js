function saoIguais (lista) {
    for ( let i = 1; i < lista.length; i++ ) {
        if ( lista[i] !== lista [i-1] ){
            return false;
        }
    }
    return true;
}

function soma(a, b, c){
    return a + b + c;
}

soma(1, 2, 3);

// function é uma destruidora de escopos

/* saoIguais([1, 1, 1, 1, 1, 1]);
saoIguais([1, 2 ,3 ,4]);
saoIguais([1, 1, 1, 1, 1, 4]);

let i = 0;

while(i<a){
    i++;
}

for(let i=0; i<a; i++){

}

for(let a in b){

}

for(let a of b){

} */