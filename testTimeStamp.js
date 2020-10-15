//console.log(new Date('1970.01.01').getTime() / 1000)
var d = '2020-02-25T00:00:00.000Z';
console.log(new Date(d).valueOf() / 1000 / 86400);
//18293
var d2 = '2020-10-13';
console.log(new Date(d2).valueOf() / 1000 / 86400 - 18317);