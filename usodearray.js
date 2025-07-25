const alunos = [
    {nome: "João", idade: 20},
    {nome: "Maria", idade: 22},
    {nome: "Pedro", idade: 21},
    {nome: "Ana", idade: 19}

]//array com a lista de nomes

//mostrar todos os alunos
console.log("Lista de alunos:");
alunos.forEach(aluno =>{
  console.log(`Nome: ${aluno.nome}, Nota: ${aluno.idade}`);

})
//gerar um novo array com os nomes dos alunos
const names= alunos.map(nombres =>nombres.nome).join(", ");//pegar o nome e transformar em string
// Calcular média da turma
let somadasidades = alunos.reduce((soma,idades) => soma + idades.idade, 0); //soma das idades
let media = somadasidades/ alunos.length; //calcular a média
console.log(`Média da turma: ${media}`); // Exibe: Média da turma: 20.5


// Função para buscar aluno por nome

function SearchbyName(name){
    const busca = alunos.find(studant => studant.nome === name)
    if(busca){
        console.log(`Aluno encontrado: Nome: ${busca.nome}, Idade: ${busca.idade}`);
    }else{
        console.log("Aluno nao encontrado");
    }
}

console.log(SearchbyName("João")); // Exibe: Aluno encontrado: Nome: João, Idade: 20
console.log(SearchbyName("Lucas")); // Exibe: Aluno nao encontrado
