const batman = {
    nombre : "Batman",
    peso : 80,
    talla : 180,
    ataque : 150 
}

console.log(batman)


class Heroe {
    constructor(nombre,peso, talla,ataque){
        this.nombre = nombre
        this.peso = peso
        this.talla = talla
        this.ataque = ataque
    }

    saludar(){
        document.write("Hola, qué tal?")
        return "Saludo"
    }
}