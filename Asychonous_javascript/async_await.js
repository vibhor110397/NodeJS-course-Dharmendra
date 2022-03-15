
const fs=require("fs")

const superagent = require('superagent')

const data = fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    // console.log(`breed :${data}`);
    
    // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) =>
    // {
    //     if(err) return console.log(err.message);
    //     console.log(res.body.message);
        
    //     fs.writeFile('dog-imag.txt',res.body.message,err =>
    //     {
    //         if(err) return console.log(err.message);
    //         console.log('random Dog images save is file')
    //     })
    // });
})

const getDogpic = async ()=>{
    try{
        const data = await readFile(`${__dirname}/dog.txt`)
        console.log(`breed :${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await fs.writeFile('dog-imag.txt',res.body.message);
        console.log('random Dog images save is file')
    }catch(err)
    {
        console.log(err.message)
        throw err
    }

    return 'done'
}


console.log("will get dog images")
getDogpic().then(x=>
    {
        console.log(x)
    }).catch(err=>{
        console.log("error")
    })
