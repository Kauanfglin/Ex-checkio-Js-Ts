/*Enunciado:
Crie um array chamado filmes.

Cada filme deve ser um objeto com:

titulo (string)

diretor (string)

ano (número)

assistido (booleano)

Faça o seguinte:

Mostre todos os filmes com forEach.

Mostre apenas os filmes assistidos.

Mostre os filmes lançados antes de 2010.
*/
let filmes = [
  { titulo: "Matrix", diretor: "Wachowski", ano: 1999, assistido: true },
  { titulo: "A Origem", diretor: "Christopher Nolan", ano: 2010, assistido: false },
  { titulo: "Interstellar", diretor: "Christopher Nolan", ano: 2014, assistido: true }
];

//mostrar todos os filmes
filmes.forEach(element => {
    console.log(`Filme: ${element.titulo}, Diretor: ${element.diretor}, Ano: ${element.ano}, Assistido: ${element.assistido}`);
});
//Mostre apenas os filmes assistidos.
function filmesassistidos(){
    let assistidos = filmes.filter(filmes=> filmes.assistido === true);
    assistidos.forEach(element=>{
        console.log(`Filme: ${element.titulo}, Diretor: ${element.diretor}, Ano: ${element.ano}, Assistido: ${element.assistido}`);
    });
}
function filmesantes(){
    const filmesantes = filmes.filter(filmes=> filmes.anos < 2010);
    filmesantes.forEach(element=>{
        console.log(`Filme: ${element.titulo}, Diretor: ${element.diretor}, Ano: ${element.ano}, Assistido: ${element.assistido}`);
    });
}
filmesassistidos();
filmesantes();