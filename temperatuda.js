/*Exercício 3: Verificação de Temperatura
Crie uma função verificarTemperatura(temp) que retorna uma Promise:

Se a temperatura for menor que 0, rejeite com "Muito frio!"

Se for maior que 35, rejeite com "Muito calor!"

Se estiver entre 0 e 35, resolva com "Temperatura agradável". */

function temp(temp){
return Pmomisse((resolve,reject) =>{
    if(temp < 0){
        reject("Muito frio!");
    }else if(temp > 35){
        reject("Muito calor!");
    }else{
        resolve("Temperatura agradável");
    }
})
}
temp(22).then(msg =>{
    console.log(msg);
}).catch(msg => {
    console.log(msg);
})