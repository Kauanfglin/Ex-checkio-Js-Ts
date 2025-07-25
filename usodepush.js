let tarefas = [];
let qtd = parseInt(prompt("Quantas tarefas deseja adicionar?"));

for (let i = 0; i < qtd; i++) {
  let descricao = prompt(`Digite a descrição da tarefa ${i + 1}:`);
  let concluidaStr = prompt(`A tarefa "${descricao}" foi concluída? (sim/não)`).toLowerCase();

  let concluida;
  if (concluidaStr == "sim") {
    concluida = true;
  } else {
    concluida = false;
  }

  tarefas.push({ descricao: descricao, concluida: concluida });
}

// Exibir todas as tarefas
console.log(" Lista de tarefas:");
tarefas.forEach(tarefa => {
  let status;
  if (tarefa.concluida) {
    status = "Concluída";
  } else {
    status = "Pendente";
  }
  console.log(`- ${tarefa.descricao}, Status: ${status}`);
});

// Tarefas concluídas
let tarefasConcluidas = tarefas.filter(task => task.concluida);
console.log("\n Tarefas concluídas:");
tarefasConcluidas.forEach(tarefa => {
  console.log(`- ${tarefa.descricao}`);
});

// Tarefas pendentes
let tarefasPendentes = tarefas.filter(task => !task.concluida);
console.log("\n Tarefas pendentes:");
tarefasPendentes.forEach(tarefa => {
  console.log(`- ${tarefa.descricao}`);
});

// Buscar tarefa
function buscarTarefa(descricao) {
  let achou = tarefas.find(tarefa => tarefa.descricao === descricao);
  if (achou) {
    console.log(`\n Tarefa encontrada: ${achou.descricao}, Status: ${achou.concluida ? "Concluída" : "Pendente"}`);
  } else {
    console.log("\nTarefa não encontrada.");
  }
}

buscarTarefa(prompt("Digite a descrição da tarefa que deseja buscar:"));
