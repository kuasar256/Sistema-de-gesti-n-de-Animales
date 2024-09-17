class Animal{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    hacerSonido(){
        console.log("XD")
    }
}
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
        console.log("Guau")
    }
}
class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
        console.log("Miau")
    }   
}
class Pájaro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    hacerSonido(){
        console.log("pio")
    }
}
function crearAnimal(tipo, nombre, edad){
    switch(tipo.toLowerCase()){
        case 'perro':
            return new
            Perro(nombre, edad);
        case 'gato':
            return new
            Gato(nombre, edad);
            case'pájaro':
            return new
            Pájaro(nombre, edad)
            default:
                return"El tipo de animal no es soportado"  
    }
}
let ani1 = crearAnimal('perro', 'canelo', 3);
if (ani1 instanceof Animal) {
    console.log(`${ani1.nombre} tiene ${ani1.edad} años.`);
    ani1.hacerSonido();
} else {
    console.log(ani1); 
}

let ani2 = crearAnimal('gato', 'chester', 2);
if (ani2 instanceof Animal) {
    console.log(`${ani2.nombre} tiene ${ani2.edad} años.`);
    ani2.hacerSonido();
}

let ani3 = crearAnimal('pájaro', 'tucan', 1);
if (ani3 instanceof Animal) {
    console.log(`${ani3.nombre} tiene ${ani3.edad} años.`);
    ani3.hacerSonido();
}

let ani4 = crearAnimal('leon', 'alex', 4);
console.log(ani4);