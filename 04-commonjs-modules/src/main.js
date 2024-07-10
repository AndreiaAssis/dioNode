const { getFullName, productType } = require("./services/products");
const products = requerid(".services/products");

const config = require(".service/config");
const database = require("./service/database");

async function main(){
    console.log("carrinho compras:");

    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getProductLabel("mousepad");

    //console.log(config.client);

    getFullName("1", "teclado"); //utiliza só o que quer

    products.getFullName("1", "teclado"); //utiliza tudo que contem
    
    console.log(productType);

    database.connectToDatabase("my-data");
}

main();