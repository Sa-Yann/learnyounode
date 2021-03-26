// console.log(process.argv[2]);

let fs = require('fs');
const path = require('path');

let cheminVersDossier = process.argv[2];
// console.log(cheminVersDossier);

let extensionNameWithtDot = `.${process.argv[3]}`;
// console.log(extensionNameWithtDot);


// let filesMD = 'index.html'
// let extension =path.extname(filesMD);
// console.log(extension);

// onfi fs.readdir : https://www.geeksforgeeks.org/node-js-fs-readdir-method/
fs.readdir(cheminVersDossier,(err,files) =>{
if(err){
    return console.log(err);
}
else{
    // On filtre le tableau files qui comprend tt les éléments 
    const chacunDesDossiers = files.filter(dossierTabQueJeVaisTesté => {
        // console.log(dossierTabQueJeVaisTesté);
        // console.log(path.extname(dossierTabQueJeVaisTesté));
        return path.extname(dossierTabQueJeVaisTesté) === extensionNameWithtDot;
    });
    // // 1ere algo pour afficher les resultat les un en dessous des autres en string sorti du tableau
    // chacunDesDossiers.forEach(dossierSelectioné => {
    //     console.log(dossierSelectioné);
    // });
    // 2eme solution pour afficher les resultat les un en dessous des autres en string sorti du tableau
    // join() is an array function from Node.js that is used to return a string from the array.
    console.log(chacunDesDossiers.join('\n'));
   }
});



// Solution learnyounode
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })