//there are four methods of using modules
//one of which is calling a method in the module as a variable
const { readFile, writeFile } = require('fs');
//for async method
//we need to provide a callback, and call it when we are done
//and the callback will run when we click on a button or something
//it is just like addEventlistener to a button
console.log('start');
readFile('./content/first.txt','utf8', (err, result) =>{
    //check if there is error, then return null
    //then if everythng is correct, thn we will have access to the data
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            'here is the result of adding ' + first + ' to ' + second,
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                } 
                console.log('done with first task');
            }
        ) 
    })
})
console.log('starting new task');