let listacompra = [
    { nome: "arroz", preco: 20.00 },
    { nome: "feijão", preco: 15.00 },
    { nome: "macarrão", preco: 10.00 },
    { nome: "macarrao", preco: 20.00 }
];

// Mostrar todos os itens do carrinho
listacompra.forEach(item => {
    console.log(`Produto: ${item.nome}, Preço: R$${item.preco.toFixed(2)}`);
});

// Gerar lista só com os nomes
let nomes = listacompra.map(item => item.nome);
console.log("\nNomes dos produtos:", nomes);

// Calcular o total da compra
let total = listacompra.reduce((acumulador, item) => {
    return acumulador + item.preco;
}, 0); 

// Função para buscar um item
function buscarItem(nomeitem) {
    let achou = listacompra.find(item => item.nome === nomeitem);
    if (achou) {
        return `Item encontrado: ${achou.nome}, Preço: R$${achou.preco.toFixed(2)}`;
    } else {
        return "Item não encontrado.";
    }
}

// Usando a função
console.log("\n" + buscarItem("macarrao"));
console.log(`Total da compra: R$${total.toFixed(2)}`);
