// console.log(process.argv);

// let result = Number(process.argv[2]);
// console.log(result);

let total = 0


for (i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
};

console.log(total);
// console.log(sommedesvaleursTab(total));



