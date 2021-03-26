// let fs = require('fs');
let http = require('http');

// let url = process.argv[2];
// console.log(url);
// let urlString = process.stdout[0];
// console.log(urlString);

// for (let i = 0; i < process.argv.length; i++) {
//     const allDatas = process.argv[i];
//     console.log(allDatas);
// };

// error info : https://medium.com/@premal.katigar/how-to-fix-throw-er-unhandled-error-event-30172323a973

// https.get(process.argv[2], (err, data) => {
//     // for (let i = 0; i < process.argv.length; i++) {
//     //     console.log(data) = process.argv[i];
//     //     // console.log(allDatas);
//     // }
//     if (err) {
//         return console.log(err);
//     }
//     else {
//         return console.log(data);
//     }

// }

// );



console.log(process.argv[2]);

http.get(process.argv[2], (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});