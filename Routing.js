
// // **********Rounting *********


// const http=require('http');


// const server=http.createServer((req,res) => {
//     const pathname=req.url;
//     if(pathname === '/' || pathname === '/overview')
//     res.end("This is over view!")
//     else if(pathname === '/product')
//     res.end("This is product!")
//     else
//     {
//         res.writeHead(404,{
//             'content-type':'text/html',
//             'my-own-header':'hello-world'
//         });
//         res.end('<h1>page not found!</h1>');
//     }
// });

// server.listen(8000,'127.0.0.1',() => {
//     console.log('listening to requests on port 8000');
// });






// *************Build a simple Api**************

const http=require('http');
const fs=require('fs');
const url=require('url');

const data=fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res) => {
    const pathname=req.url;
    if(pathname === '/' || pathname === '/overview')
    res.end("This is over view!")
    else if(pathname === '/product')
    res.end("This is product!")
    else if(pathname === '/api')
    {
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)
    }
    else
    {
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>page not found!</h1>');
    }
});

server.listen(8000,'127.0.0.1',() => {
    console.log('listening to requests on port 8000');
});
