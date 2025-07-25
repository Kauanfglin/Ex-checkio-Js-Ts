//criar lista de produto 

let listas = [
    {nome  :"tomate", preco: 5.00},
    {nome  :"batata", preco: 3.00},
    {
        nome : "cenoura",preco : 4.00
    }


]
    console.log("Lista de produtos disponíveis:");
listas.forEach(( pessoa =>console.log('produto: ' + pessoa.nome + ', preço: R$' + pessoa.preco.toFixed(2)

)));
//criar um array so com os nomes
let nomes  = listas.map(nombres =>nombres.nome);

console.log(nomes);

// Procurar um produto específico
function encontrarProd(nomedoproduto){
let achouuu = listas.find(produto =>produto.nome === nomedoproduto);
return achouuu ? `Produto encontrado: ${achouuu.nome}, Preço: R$${achouuu.preco.toFixed(2)}` : "Produto não encontrado";


}

console.log(encontrarProd("cenoura"));
