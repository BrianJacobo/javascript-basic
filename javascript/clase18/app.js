var luis= {
    nombre: 'Luuis Angel',
    apellido: 'jacobo fuentes',
    altura: 1.74
}

var piero= {
    nombre: 'Jesus piero',
    apellido: 'muñante',
    altura: 1.55
}

var brian= {
    nombre: 'Brian',
    apellido: 'jacobo',
    altura: 1.57
}

const esAlta =persona=> persona.altura > 1.7
/*  const esAlta = (persona)=>{ return persona.altura > 1.7+
 */

const alturaCms = ({altura})=>{
    altura *=100
    return altura
}

const pasarAlturaAcms = persona =>{
    persona.altura *=100
    return persona
}
var personas = [luis, piero,brian]
var personasAltas= personas.filter(esAlta)
let alturaACms= personas.map(alturaCms)
let alturaAcent= personas.map(pasarAlturaAcms)
console.log(personas)
console.log(personasAltas)
console.log(alturaACms)
console.log(alturaAcent)