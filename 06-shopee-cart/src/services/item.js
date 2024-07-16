//CASOS DE USO DOS ITENS

// -> Criar item com subtoal certo
async function createItem(nome, price, quantity){
 return{
    nome,
    price,
    quantity,
    subtotal: () => price * quantity,
 }   
}

export default createItem;
