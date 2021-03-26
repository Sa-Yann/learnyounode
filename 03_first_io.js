// console.log(process.argv[2]);

let fs = require('fs');

let nomFichier = process.argv[2];
// console.log(nomFichier);

let typeFichier = fs.readFileSync(process.argv[2], 'utf8');
// argument utf8 permet de passet un buffer de fichier texte en TextDecoder
// console.log(typeFichier);

// on divisise le txt en un un tableau ou chaque ligne est dans un rangée du tableau
let tab = typeFichier.split('\n');
// console.log(tab);

let nbDeLignes = tab.length - 1;
console.log(nbDeLignes);





// let bufferFichier = fs.readFileSync(nomFichier);
// console.log(bufferFichier);

// let contenuFichierRecoded = bufferFichier.toString();
// console.log(contenuFichierRecoded);


