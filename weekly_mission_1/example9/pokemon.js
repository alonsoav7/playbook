//Exportando clase "pokemon" con export default

export default class Pokemon {

    constructor(name){
        this.name = name
    }
//Creando función para que el pokemon salude
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
}

