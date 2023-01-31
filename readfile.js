//there are four methods of using modules
//one of which is calling a method in the module as a variable
const { readFileSync, writeFileSync } = require('fs');
//so i created two text files in the content folder
//let see how to "read" from filesystem with filesync method
//for this method, we will need two parameters namely, path to file and encoding (utf8)
//crete the var
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//to see the content
console.log(first, second);