/*Suponha que temos uma nave espacial com uma bateria. 
Se a bateria for suficiente para o percurso, ela segue viagem. Se não, mostra erro  */
const nave = {
  nome: "Nave Espacial",
  bateria: 100,
  distanciaporkm: 20,

  verificarBateria: function (distancia) {
    return new Promise((resolve, reject) => {
      const Distancenecessaria = distancia * this.distanciaporkm;
      if (Distancenecessaria <= this.bateria) {
        this.bateria -= Distancenecessaria; // simula gasto
        resolve(` Bateria suficiente para a viagem. Bateria restante: ${this.bateria}%`);
      } else {
        reject(" Bateria insuficiente para a viagem.");
      }
    });
  }
};

// Testando:
nave.verificarBateria(3)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(erro => {
    console.log(erro);
  });
