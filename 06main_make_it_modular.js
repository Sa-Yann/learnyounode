// const mymodule lie le dossier main.js avec le dossier module.js
// ATTENTION: for local modules must be prefixed  with './'.
// The '.js' is optional here and you will often see it omitted. 
const myModule = require('./06module_of__make_it_modular');

let cheminVersDossier = process.argv[2];
let extensionNameWithtDot = process.argv[3];
// avec console log ca retourn ele tableau 
// const lesNomsDeDossiersRécupérés = console.log;
// avec la fonction annonymes (err,nosDonnéesRécupérées) =>{...} et le .l=join('\n')
// ca retourne les valeurs en string les unes en dessous des autres
const lesNomsDeDossiersRécupérés = (err,nosDonnéesRécupérées) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(nosDonnéesRécupérées.join('\n'));
    }
};

myModule(cheminVersDossier,extensionNameWithtDot,lesNomsDeDossiersRécupérés);


// Solution Learnyounode
// 'use strict'
//     const filterFn = require('./solution_filter.js')
//     const dir = process.argv[2]
//     const filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err) {
//         return console.error('There was an error:', err)
//       }
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

