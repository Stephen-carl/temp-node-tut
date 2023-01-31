//http module
const http = require('http')
//to create server and callback
//pass in two parameters (req, res), and the callback
//understand that callback is represented by the =>{ write codes }
const server = http.createServer((req, res) => {
    //req represents the incomng request
    //res represents th response
    //console.log(req); //to view some intersting properities of req
    //for example, to use the req object and some properties
    //using url proerty to get a url the user wants to go to, provide this response
    if(req.url === '/') {
        //if req is homepage, respond this
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about') {
        //if req is about, res this
        res.end('About page')
    }
    //then if the user request a file that is not in the filesystem
    //we can also run html syntax in this
    //to do this, wcle use ` not ' they are different
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find this page</p>
        <a href="/">Back Home</a>
    `)
})
//add the port the server will listen to 
server.listen(5000)