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

var personas = [luis, piero,brian]
const esAlta =persona=> persona.altura > 1.7
/*  const esAlta = (persona)=>{ return persona.altura > 1.7+
 */

const pasarAlturaAcms = persona =>{
    
    return {
        ...persona,
        altura:persona.altura *=100
    }
}

const alturaACms= personas.map(pasarAlturaAcms)
console.log(personas)
console.log(alturaACms)