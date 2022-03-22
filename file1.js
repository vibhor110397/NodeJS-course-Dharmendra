// *******File System*********

const fs= require("fs")


// // synchronus code (blockin)



// const fs=require('fs')

// // *********read from file********

// // const textin=fs.readFileSync("./txt/f1.txt",'utf-8');

// // console.log(textin);


// // ********write in the file*********

// const textout = `this is written in the file \n created  on ${Date.now()}`;

// fs.writeFileSync("./txt/writeInFile.txt",textout);

// console.log("file written")



// Asynchronous code (non-blocking coding)


// fs.readFile('./txt/f1.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// console.log("reading the file")


fs.writeFile('./txt/writeInFile.txt','written content using asynchronous code','utf-8',err =>{
console.log("file written")
})





