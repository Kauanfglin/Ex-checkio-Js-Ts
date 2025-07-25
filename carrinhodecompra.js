//arrray com os dados
let carrinho = [

    { nome : "arroz", preco: 20.00, quantidade: 2 }
    ,{ nome : "feijão", preco: 15.00, quantidade: 1 },
    { nome : "macarrão", preco: 10.00, quantidade: 3 },
    { nome : "macarrao", preco: 20.00, quantidade:3}
]

// Mostrar todos os itens do carrinho
console.log("Exibindo itens do carrinho:");
carrinho.forEach(itens => {
    console.log(`Produto: ${itens.nome}, Preço: R$${itens.preco.toFixed(2)}, Quantidade: ${itens.quantidade}`)
});

//calçular o total SEM APLICAR O DESENHO
let totalasemdesconto = carrinho.reduce((soma,quantidade) => {
    return soma + quantidade.preco * quantidade.quantidade;
}, 0);


console.log(`Total sem desconto: R$${totalasemdesconto.toFixed(2)}`);
// Calcular o total com desconto de 10%
let totalcomdesconto = carrinho.reduce((soma,quantidade) =>{
    let precofinal = quantidade.preco *0.9; //aplicando desconto de 10%
if(precofinal > 100){
    return soma + quantidade.preco * quantidade.quantidade * 0.9; //aplicando desconto de 10% se o total for maior que 100
}else{
    return soma + quantidade.preco * quantidade.quantidade;

}
}, 0);
console.log(`Total com desconto: R$${totalcomdesconto.toFixed(2)}`);
console.log(`Total com desconto: R$${totalcomdesconto.toFixed(2)}`); //aplicando desconto de 10% se o total for maior que 100
 //aplicando desconto de 10%