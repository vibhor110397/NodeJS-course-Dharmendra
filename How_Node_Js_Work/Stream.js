const fs=require("fs")

const server=require("http").createServer();


// ***********solution 1**************

// server.on("request",(req,res) =>{
//     fs.readFile("text.txt",(err,data) =>{
//         if(err) console.log(err);
//         res.end(data);
//     });
// });

// *******Solution 2**********

// server.on("request",(req,res) =>{
// const readable = fs.createReadStream("text.txt");
// readable.on("data",chunk =>{
//     res.write(chunk);
// });

// readable.on("end",()=>{
//     res.end();
// });

// readable.on('error',err =>{
//     console.log(err)
//     res.statusCode=500;
//     res.end('file not found');
// })

// });


// *******Solution 3**********

server.on("request",(req,res) =>{
    const readable = fs.createReadStream("text.txt");
    readable.pipe(res)
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening....")
})
