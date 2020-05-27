function Bombero(nombre, grado, edad){
    this.nombre= nombre
    this.grado= grado
    this.edad= edad
}

Bombero.prototype.saludar = function(){
    console.log(`hola soy bombero y me llamo ${this.nombre}, tengo el grado de ${this.grado} y mi edad es ${this.edad}`)
}

let brian = new Bombero('Brian','seccionario',21)
let salinas = new Bombero('Salinas','comandante',55)
let jamil = new Bombero('Jamil','seccionario',20)

brian.saludar()
salinas.saludar()
jamil.saludar()
