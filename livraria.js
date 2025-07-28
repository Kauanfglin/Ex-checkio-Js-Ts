class livro{
    constructor(titulo,autor,anoPublicacao ){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao  = anoPublicacao ;
    }

}
const biblioteca = [
  new Livro("O Código Da Vinci", "Dan Brown", 2003),
  new Livro("A Garota no Trem", "Paula Hawkins", 2015),
  new Livro("Sapiens", "Yuval Harari", 2011)
];

//// 📋 Mostrar todos os livros com forEach
console.log("Todos os livros:");
biblioteca.forEach(livro => {
console.log(` - ${livro.titulo} (${livro.autor}, ${livro.anoPublicacao})`);
}
);
let recentes = biblioteca.find(livro =>livro.anoPublicacao >= 2010);

console.log("Livro mais recente:");
recentes.forEach(livro => {
    console.log(`${livro.titulo} (${livro.autor}, ${livro.anoPublicacao})`);
})