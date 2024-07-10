const databaseType = {
    userType: "admin",
    typeData: "dataLocal",
}

async function connectToDatabase(dataName){
    //lógica de conexão
console.log(`conecyado ao banco ${dataName}`);
}

async function disconnectDatabase(){
    console.log("desconectando do banco de dados");
}

//module.exports = {connectToDatabase, }

export {connectToDatabase, disconnectDatabase, databaseType}; //export atras de objeto