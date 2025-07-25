class Planet  {
constructor(name,tamanho){
    this.name = name;
    this.tamanho = tamanho;
}
//metodo para comprimentar

SayHello(){
console.log('Olá, sou ${this.nome}. Tamanho: ${this.tamanho} ');


}
}
const planetas = [
    new Planet('Terra', '12,742 km'),
    new Planet('Marte', '6,779 km'),
    new Planet('Jupiter', '142,984 km'),
    new Planet('Saturno', '120,536 km'),
    new Planet('Urano', '51,118 km'),
    new Planet('Netuno', '49,244 km')
]

//percorrer o array e chamar o metodo SayHello

planetas.forEach(planet => {
planet.SayHello();
}
);