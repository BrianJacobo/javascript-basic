class Persona{
    constructor(nombre, apellido, altura) {
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
    }
  
    saludar() {
      console.log(`hola mi nombre es ${this.nombre} y ingeniero`);
    }
  
    soyAlto() {
      return this.altura > 1.8,
      console.log('soy alto y mi altura es de ' + this.altura);
    }
  }
  
  class Desarrollador extends Persona{ /* la herencia se denomina en un clase extension y para acceder a ella se necesita el elemento super*/
    super(nombre, apellido,altura) {
      this.nombre = nombre
      this.apellido = apellido
    }
  
    saludar() {
      console.log(`hola soy ${this.nombre} y soy desarrollador`);
    }
  }
  
  var flavio = new Persona ('flavio','',1.85)
  var flavio = new Desarrollador('flavio','' , 1.85)
  
  flavio.saludar()
  flavio.soyAlto()