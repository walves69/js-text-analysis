
  const pronomes_str = `
  eu   me   mim comigo
  tu   te   ti contigo
  ele  ela  o a lhe se si consigo
  nós 	nos  conosco
  vós 	vos  convosco
  eles elas os as lhes se si consigo

  meu   minha meus   minhas
  teu   tua   teus   tuas
  seu   sua   seus   suas
  nosso nossa nossos nossas
  vosso vossa vossos vossas
  seu   sua   seus   suas

  esta essa aquela 	estas essas aquelas
  este esse aquele 	estes esses aqueles

  algum alguma alguns algumas 
  nenhum nenhuma nenhuns nenhumas 
  muito muita muitos muitas 
  pouco pouca poucos poucas 
  todo toda todos todas 
  outro outra outros outras 
  certo certa certos certas 
  vário vária vários várias 
  tanto tanta tantos tantas 
  quanto quanta quantos quantas 
  qualquer quaisquer qual quais 
  um uma uns umas
  quem alguém ninguém tudo nada outrem algo cada

  o_qual a_qual os_quais as_quais 
  cujo cuja cujos cujas 
  quanto quanta quantos quantas 
  quem que onde

  Você
  Voce
  Senhor
  Senhores
  Senhora
  Senhoras
  Vossa_Excelência
  Vossa_Excelencia
  Vossa_Magnificência
  Vossa_Magnificencia
  Vossa_Senhoria
  Vossa_Majestade
  Vossa_Alteza
  Vossa_Santidade
  Vossa_Eminência
  Vossa_Eminencia
  Vossa_Reverendíssima
  Vossa_Reverendissima
`;


/**
 * Conectivos e preposicoes
 */
const stopwords = [
'a',
'as',
'o',
'os',
'ao',
'aos',
'e',
'de',
'do',
'da',
'dos',
'das',
'no',
'na',
'nos',
'nas',
'em',
'com',
'que'
];



function getPronomes(){
    let pronomes = pronomes_str + stopwords;
    let pronomes_ = Array.from(new Set(pronomes.split(/\s+/))).
    filter(word => word.length>0).
    map(word => word.replace("_", " "));
    return pronomes_;
}



function getStopWords() {
    return stopwords;
}



function getMeses() {
  return [
    'janeiro', 'fevereiro', 'março', 
    'abril', 'maio', 'junho', 
    'julho', 'agosto', 'setembro',
    'outubro', 'novembro', 'dezembro'
  ]
}


/* contar a quantidade de artigos pode revelar se fala mais de masculino ou feminino */

/*

como em postuguês liga uma palavras a uma ou mais palavras

PALAVRA - COMO - PALAVRA[1,N]
PALAVRA - E - PALAVRA[1,1]


- LISTAR PERGUNTAS DO PEXTO
- LISTAR RESPOSTAS DO TEXTO
*/