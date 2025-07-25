class Spaceship {
    constructor(name, capitan, armament) {
        this.name = name;
        this.capitan = capitan;
        this.armament = armament;
    }

    mostrarmarmentos() {
        console.log(`Armamentos da nave ${this.name}:`);
        
        if (this.armament.length === 0) {
            console.log("Nenhum armamento disponível.");
        } else {
            this.armament.forEach((element, index) => {
                console.log(`${index + 1}: ${element}`);
            });
        }
    }
}

const spaceship1 = new Spaceship('Venera', 'Hulk', ['mira', 'laser', 'granada']);
spaceship1.mostrarmarmentos();
