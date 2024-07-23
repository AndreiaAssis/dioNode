import connectToDatabase from "./database/data.js";

async function main(){

    await connectToDatabase("teset1", "teste2");
}

main();