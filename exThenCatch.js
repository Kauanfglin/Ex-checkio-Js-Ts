/* Exercício 1: Verificar Estoque de Produto
Crie uma função verificarEstoque(produto, quantidade) que retorna uma Promise.
 Se o produto tiver estoque suficiente, resolva com a mensagem "Pedido confirmado", 
 senão rejeite com "Estoque insuficiente". */
 

 let estoque = [

    { nome: "Detergente", quantidade: 5 },
    { nome: "Sabão em pó", quantidade: 0 },
    { nome: "Arroz", quantidade: 12 },
    { nome: "Feijão", quantidade: 0 },
    { nome: "Shampoo", quantidade: 8 },
    { nome: "Desinfetante", quantidade: 3 }
 ]

 // verificar   {
  return new Promise((resolve, reject) => {
    let i = 0; // verificando o primeiro produto
    const quantidade = estoque[i].quantidade;

    if (quantidade >= 3) {
      resolve(`✅ Produto disponível: ${estoque[i].produto}`);
    } else {
      reject(`❌ Estoque insuficiente de ${estoque[i].produto}`);
    }
  });

/*
Ouu
function verificarEstoque(produto){
    
}
if(estoque[produto]>=5){
    console.log(` Produto disponível: ${estoque[i].produto}`);
}else{
    console.log(` Estoque insuficiente de ${estoque[i].produto}`);
}              
}
*/     