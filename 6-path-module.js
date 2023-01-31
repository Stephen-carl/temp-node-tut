const path = require('path')
//to read a path of file

//to het the absolute pat of a file
//useful esp when the application is in a different evn
const absolutePath = path.resolve (__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);