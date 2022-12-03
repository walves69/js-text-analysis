

/* funcao generica para gerar ngrams */
function ngram(arr, n) {
    let lista = [];
    for(let i=0; i<=arr.length-n; i++){
        //i+n seria igual a dois, mas o fim nao e incluido
        lista.push( arr.slice(i, i+n).join(" ") );
    }
    return lista;
}

// console.log("2 ngram - rato roeu a roupa");
// console.log( ngram(rato.split(" "), 2) );

// console.log("3 ngram - rato roeu a roupa");
// console.log( ngram(rato.split(" "), 3) );

// console.log("4 ngram - rato roeu a roupa");
// console.log( ngram(rato.split(" "), 4) );

// console.log("5 ngram - rato roeu a roupa");
// console.log( ngram(rato.split(" "), 5) );


function ngram_all(arr) {
    let lista = [];

    for(let i=2; i<=arr.length; i++) {
        var parte = ngram(arr, i);
        lista = lista.concat(parte);
    }
    return lista;
}


//console.log("ngram_all - o rato roeu a roupa");
//console.log( ngram_all(rato.split(" ")) );


function ngrams_between(arr, min, max) {
    let lista = [];

    for(let i=min; i<=arr.length; i++) {
        var parte = ngram(arr, i);
        if(parte[0].split(" ").length > max) break;
        lista = lista.concat(parte);
    }
    return lista;
}

//console.log("ngrams_between - o rato roeu a roupa");
//console.log( ngrams_between(rato.split(" "), 1, 1) );
