let fs = require('fs');
const path = require('path');

module.exports = function (cheminVersDossier,extensionNameWithtDot,lesNomsDeDossiersRécupérés) {
    extensionNameWithtDot = `.${extensionNameWithtDot}`;
    fs.readdir(cheminVersDossier,(err,files) =>{
        if(err){
            return lesNomsDeDossiersRécupérés(err);
        }
            const chacunDesDossiers = files.filter(dossierTabQueJeVaisTesté => {
            return path.extname(dossierTabQueJeVaisTesté) === extensionNameWithtDot;
            });
            lesNomsDeDossiersRécupérés(null,chacunDesDossiers);
        });
 }

// Solution Learnyounode
//  'use strict'
//  const fs = require('fs')
//  const path = require('path')
 
//  module.exports = function (dir, filterStr, callback) {
//    fs.readdir(dir, function (err, list) {
//      if (err) {
//        return callback(err)
//      }
 
//      list = list.filter(function (file) {
//        return path.extname(file) === '.' + filterStr
//      })
 
//      callback(null, list)
//    })
//  }



