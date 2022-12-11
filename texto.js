
/* Limpeza */

/**
 * Troca acentos pelas respectivas letras sem acentos.
 * @param {string} text 
 * @returns string
 */
function removeAcento(text) {       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}


/**
 * Remove tudo que não for letras e espaços.
 * @param {string} text 
 * @returns string
 */
function removeSpecialChars(text) {
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
}


/**
 * Troca acentos por letras e limpa caracteres especiais.
 * @param {string} texto 
 * @returns string
 */
function limparTexto(texto) {
    let t = removeAcento(texto);
    return removeSpecialChars(t);
}




/* Texto - Palavras */

/**
 * Retorna lista de palavras sem repetição.
 * @param {string} texto 
 * @returns array 
 */
function listarPalavrasUnicas(texto, sort = false) {
    
    let array = listarPalavras(texto);
    array = array.map( i => { return i.toLowerCase() });

    let palavras = new Set([...array]);

    if(sort) {
        return Array.from(palavras).filter(palavra =>palavra.length>0).sort();
    }
    return Array.from(palavras).filter(palavra =>palavra.length>0);
}

/**
 * Retorna lista de palavras com repetição.
 * Retirado caracteres :(),.
 * @param {string} texto 
 * @returns array
 */
function listarPalavras(texto, sort = false) {
    let palavras = texto.split(/\s+/);

    palavras = palavras.map( item => {

        return item.replace(",", "").
        replace(".", "").
        replace("(", "").
        replace(")", "").
        replace(":", "").
        toLowerCase()
        ;

    });

    if(sort) {
        return Array.from(palavras).filter(palavra =>palavra.length>0).sort();
    }

    return Array.from(palavras).filter(palavra =>palavra.length>0);
}


function contarPalavras(texto) {
    let i = listarPalavras(texto); 
    return i.length;
}




/* Texto - Setenças */

/**
 * 
 * @param {string} texto 
 * @returns array
 */
function listarSentencas(texto) {
    return texto.split(/[.?!]/);
}




/* Estatísticas - max min */

/**
 * Retorna a maior palavra numa lista.
 * @param {array} arr 
 * @returns string
 */
function maxString(arr) {
    return arr.reduce(
      (savedText, text) => (text.length > savedText.length ? text : savedText),
      '',
    );
}

/**
 * Retorna menor palavra numa lista.
 * @param {array} arr 
 * @returns string
 */
function minString(words) {
    words.filter(palavra=>palavra.length>0);
    var min = words[0].length;
    var minWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length < min) {
            min = words[i].length;
            minWord = words[i];
        }
    }
    return minWord;
}




/* Frequências */


function palavraFrequenciaObj(words) {
    //var words = text.split(/\s+/);
    var freqMap = {};
    words.forEach(function(w) {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });
    //return filtraObjetoComFrequencias(freqMap);
    return freqMap;
}


function listaFrequenciasDistintas(words) {
    let obj = palavraFrequenciaObj(words);
    let valores = new Set(Object.values(obj));
    valores = Array.from(valores).sort( (a,b)=> b-a ).filter( i => {return i>1});
    return valores;
}


function frequenciaPalavrasObj(words, minFreq = 0) {

    let obj = palavraFrequenciaObj(words);
    let arvore = {};

    // criando um arrays dos valores distintos
    let valores = new Set(Object.values(obj));
    valores = Array.from(valores).sort( (a,b)=> b-a);

    // preencher a arvore com valores zerados
    valores.forEach( item=>{ arvore[item] = [] });

    Object.keys(obj).forEach(key=>{

        // nova chave será o valor
        let chaveArvore = obj[key];

        // arvore[chaveArvore] é um array
        // adicionar nele a key que é a palavra
        arvore[chaveArvore].push(key);
        
    });


    // ordenando a frequencia pra ficar melhor
    // let arvore2 = {};

    // Object.entries(arvore).forEach(entry => {
    //     let chaveNew = String(entry[0]).padStart(2, '0');
    //     let valorNew = Array.from(entry[1]).sort();

    //     arvore2[chaveNew] = valorNew;
    // });


    // caso haja uma frequência mínima no segundo parâmetro, filtrar
    let chaves = Object.keys(arvore);
    chaves = chaves.filter( item => item < minFreq );
    chaves.forEach( item => delete arvore[item] );

    return arvore;
}




function palavraFrequenciaMap(arr) {
    let dados = new Map();
    for(let i = 0; i<arr.length; i++) {
        if( !dados.has(arr[i]) ) {
            dados.set( arr[i], 1 ); // se nao tem, adicionar com a primeira ocorrencia
        } else {
            let novoValor = dados.get(arr[i]);
            dados.set(arr[i], ++novoValor);
        }            
    }
    return dados;
}




// transformar o mapa de palavra - ocorrencia
// num mapa de ocorencia - lista de palavras
function frequenciaPalavrasMap(arr, minFreq=0) {
    let dados = palavraFrequenciaMap(arr);
    let mapa = new Map();

    for(let item of dados) {
        if(!mapa.has( item[1] )) {
            mapa.set( item[1] , [] );
        } 
        mapa.get( item[1] ).push( item[0] );
    }


    for (const key of mapa.keys()) {
        if (key < minFreq) {
            mapa.delete(key);            
        }
    }

    
    return mapa;
}