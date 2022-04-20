//Creando clase "pokemon"

class pokemon {

    constructor(name){
        this.name = name
    }
//Creando función para que el pokemon salude
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
//Creando otra función para que el pokemon salude 
    sayMessage(message) {
        console.log(`Mi pokemon: ${this.name} dice: ${message}`)
    }
}

//Exportando el módulo
module.exports = pokemon
