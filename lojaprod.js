//class produto 
class produto {
constructor(nome,preco,quantidade){
this.nome = nome;
this.preco = preco;
this.quantidade = quantidade
}

  // Método para verificar estoque usando Promise

  /**
   * Verificar estoque

   */
  verificar(qntdsolicitada){
return new Promisse((resolve,reject)=>{
    if(qntdsolicitada <= this.quantidade){
        resolve(`✅ Produto disponível: ${this.nome}`);
    }else{
        reject(`❌ Estoque insuficiente de ${this.nome}`);
    }
})

  }
}
const nomesprod =[
    {nome : "tomate", preco: 5.00, quantidade: 2}
    ,{nome : "batata", preco: 3.00, quantidade: 1 },
    {nome : "cenoura", preco: 4.00, quantidade: 3 },
]
// Mostrar todos os produtos

nomesprod.forEach(itens =>{
    console.log(` Produto: ${itens.nome}, Preço: R$${itens.preco.toFixed(2)}, Quantidade: ${itens.quantidade}`);
})

//simular uma compra

let comprei = "tomate"
let qntdsolicitada = 3
let disponivelounao = nomesprod.findo(itens => itens.nome === comprei)

if(disponivelounao){
disponivelounao.verificar(qntdsolicitada).then(msg => {
    console.log(msg);
}).catch(msg => {
    console.log(msg);
})
}