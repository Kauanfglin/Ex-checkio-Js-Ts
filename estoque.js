const estoques = [
  { nome: "Detergente", categoria: "limpeza", quantidade: 5 },
  { nome: "Sabão em pó", categoria: "limpeza", quantidade: 0 },
  { nome: "Arroz", categoria: "alimento", quantidade: 12 },
  { nome: "Feijão", categoria: "alimento", quantidade: 0 },
  { nome: "Shampoo", categoria: "higiene", quantidade: 8 },
  { nome: "Desinfetante", categoria: "limpeza", quantidade: 3 }
];
//Mostrar apenas produtos da categoria "limpeza"
let limpeza = estoques.filter(itens =>itens.categoria === "limpeza");
console.log("produtos na categoria Limpeza:");
limpeza.forEach(itens=>{
  console.log(`produtos :${itens.nome},quantidade ${itens.quantidade}`);  
})
//Mostrar nomes dos produtos com estoque zerado
let semestoque = estoques.filter(itens=> itens.quantidade === 0)
console.log("\nProdutos sem estoque:");
semestoque.forEach(itens =>{
    console.log(`Produto: ${itens.nome}, Categoria: ${itens.categoria}`);
})

let prodporcategoria={}
for(let i = 0;i<estoques.length;i++){
    const categoria = estoques[i].categoria;
    if(!prodporcategoria[categoria]){
prodporcategoria[categoria] = 0;
    }
prodporcategoria[categoria]++
}
console.log("\nQuantidade de produtos por categoria:");
console.log(prodporcategoria);