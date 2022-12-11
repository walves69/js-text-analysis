




function diferenca(array1, array2) {
    return array1.filter( function( el ) {
        return !array2.includes( el );
    } );

    //caso fosse es6
    //return array1.filter( x => !array2.has(x) );
}



function intersecao(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
    let intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}