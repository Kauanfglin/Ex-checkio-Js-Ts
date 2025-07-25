const names =[
//vetor com varios nomes
{name : " João", idade: 25, profissao: "Engenheiro"},
{name : " Maria", idade: 30, profissao: "Médica"},
{name : " Pedro", idade: 22, profissao: "Estudante"},
]

//criar um novo array
const NamesMap = names.map(element =>element.nome).join(", ");//pegar o nome e transformar em string


console.log(NamesMap); // Exibe: " João, Maria, Pedro"