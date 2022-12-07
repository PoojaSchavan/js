var str='pooja    pooja chavan';
//var a=str.length

//var a=str.toUpperCase();
var a=str.toLowerCase();
console.log(a);

var b= str.includes("p");
console.log(b);

var startwith= str.startsWith("p");
console.log(startwith);

var endsWith= str.endsWith("n");
console.log(endsWith);

var search = str.search('p');
console.log(search)

//match

var match= str.match(/pooja/g);
console.log(match);

var indexOF = str.includes('pooja');
console.log(indexOF);

var lastIndexOF = str.lastIndexOf('an');
console.log(lastIndexOF);


var replace = str.replace('pooja', 'Arti');
console.log(replace);

var replace = str.replace(/pooja/g, 'Arti');
console.log(replace);


var trim = str.trim();
console.log(trim);


var charat= str.charAt(3);

console.log(charat);