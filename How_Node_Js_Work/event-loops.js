// const EvenEmitter =require("events");
// const { read } = require("fs");

// class sales extends EvenEmitter{
//     constructor()
//     {
//         super();
//     }
// }

// const myEmitter = new EvenEmitter();

// myEmitter.on("mySales" , () => {
//     console.log("There was a new sales!");
// });

// myEmitter.on("mySales" , () => {
//     console.log("hii I'm Dubey");
// });

// myEmitter.on("mySales" , stock => {
//     console.log(`stock=${stock}`);
// });

// myEmitter.emit("mySales");
// myEmitter.emit("mySales",9);


// ************************************************************

const http = require('http');

const server=http.createServer();

server.on("request", (req,res)=>{
    console.log("hii there")
    res.end("hello on server")
})

server.on("request", (req,res) =>{
    console.log("hii there")
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("writing for request.....")
});