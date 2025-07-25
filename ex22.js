class spaceship{
    constructor(name,capitan,armament){
        this.name = name;
        this.capitan = capitan;
        this.armament = armament;
    }
    mostrarmarmentos(){

        console.log(`A espaçonave ${this.name} tem os seguintes armamentos: ${this.armament.join(', ')}.`);

    }

}

const spaceship1 = new spaceship('Venera', 'Hulk', ['mira', 'laser', 'granada']);
spaceship1.mostrarmarmentos();