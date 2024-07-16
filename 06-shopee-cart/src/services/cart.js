// quais ações meu carrinho pode fazer



//CASOS DE USO
// -> adicionar item do carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// -> Calcular o total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    //console.log(result);
    console.log(`\nTotal: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
  
    if (index !== -1) {
      userCart.splice(index, 1);
    }
  }

// -> remover um item  do carrinho - diminuir um item
async function removeItem(userCart, item){
    //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

//#region Remove 1
// async function removeItem(userCart, index){

//     // transforma o indice visual do usuário, para o indice do backend
//     const deleteIndex = index -1;

//     // é maior do que zero e se é menor do que o tamanho do carrinho
//     if(index >= 0 && index < userCart.length){
//         userCart.splice(deleteIndex, 1);
//     }
// }
//#endregion

async function displaycart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.nome} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });  
  }

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}