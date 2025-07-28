// Criar a classe Aluno
class Aluno {
  constructor(nome, nota, nota2) {
    this.nome = nome;
    this.nota = nota;
    this.nota2 = nota2;
  }

  // Método para calcular a média
  media() {
    let soma = this.nota + this.nota2;
    let media = soma / 2;
    return media;
  }
}

// Criar os alunos
const dadosalunos = [
  new Aluno("João", 8, 9),
  new Aluno("Maria", 6, 7),
  new Aluno("Pedro", 7, 8)
];

// Mostrar nome e média de cada aluno
console.log("📋 Nome e média de cada aluno:");
dadosalunos.forEach(aluno => {
  console.log(`Nome: ${aluno.nome}, Média: ${aluno.media()}`);
});

// Verificar quais alunos s nota maior ou igual a 6
function alunosAprovados() {
  const aprovados = dadosalunos.filter(aluno => aluno.media() >= 6);
  console.log("\n✅ Alunos aprovados:");
  aprovados.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome}, Média: ${aluno.media()}`);
  });
}

alunosAprovados();
