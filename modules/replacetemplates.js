module.exports =(temp,product)=>{

    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);

    output=output.replace(/{%IMAGES%}/g,product.image);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%FROM%}/g,product.from);
    output=output.replace(/{%NUTREINS%}/g,product.nutrients);
    output=output.replace(/{%QUNATITY%}/g,product.quantity);
    output=output.replace(/{%DESCRIPTIONS%}/g,product.description);
    output=output.replace(/{%ID%}/g,product.id);
    if(!product.organic) output=output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return output;
}