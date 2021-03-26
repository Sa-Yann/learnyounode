// console.log(process.argv[2]);

let fs = require('fs');

let nomFichier = process.argv[2];
// console.log(nomFichier);


// 1ere ecriture:
fs.readFile(nomFichier, 'utf8',
    // en utilisant le utf8 j evite d'utiliser la fonction la methode to string
    function (err, data) {
        if (err) {
            return (console.log('y a une erreur'));
        }
        // pas besoin de mettre le esle de if 
        // console.log(data);
        let tab = data.split('\n');
        // console.log(tab);
        // let tab = typeFichier.split('\n');
        let nbDeLignes = tab.length - 1;
        console.log(nbDeLignes);
    });

    // 2 eme écriture
    // A  FAIRE QUAND TU AURAS DU TEMPS

// console.log(typeFichier);

// console.log(typeFichier);
// argument utf8 permet de passet un buffer de fichier texte en TextDecoder
// console.log(typeFichier);

// on divisise le txt en un un tableau ou chaque ligne est dans un rangée du tableau
// let tab = typeFichier.split('\n');
// console.log(tab);

// let nbDeLignes = tab.length - 1;
// console.log(nbDeLignes);








