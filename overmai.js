

const http=require('http');
const fs=require('fs');
const url=require('url');
const slugify=require('slugify');

const replaceTemplate=require('./modules/replacetemplates')




const tempOverview=fs.readFileSync(`${__dirname}/templates/templates_overview.html`,'utf-8');
const tempcard=fs.readFileSync(`${__dirname}/templates/templates_cards.html`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/templates-product.html`,'utf-8');


const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj=JSON.parse(data);
 

const slugs=dataObj.map(el =>slugify(el.productName,{lower:true}))

console.log(slugs)
const server=http.createServer((req,res) => {
    
    
    const {query,pathname}=url.parse(req.url,true)
    

// ***********overview page************

    if(pathname === '/' || pathname === '/overview')
    {
        res.writeHead(200,{'Content-type':'text/html'})

        const cardsHtml =dataObj.map(el =>replaceTemplate(tempcard,el)).join('');

        const output=tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
        res.end(output);
    }


    // *********product page******
    else if(pathname === '/product')
    {
        res.writeHead(200,{'Content-type':'text/html'})
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct,product)
        res.end(output)
    }


    // ***********Api*********
    else if(pathname === '/api')
    {
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)
    }


    // *********Not Found*************

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
