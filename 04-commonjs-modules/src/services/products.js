//todas as funções que lidam com o produto

const productType = {
    version: "digital",
    tax: "v1",
};

const apiURL = {
    url: "www.google.com/api",
};

async function getFullName(codeId, productName){
    //return codeId + "--" + productName;
    //console.log("\n");    
    console.log("productX " + codeId + "--" + productName);
    await doBreakLine();
}

//hider function
async function doBreakLine(){ //quebra de linha
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("Product " + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};