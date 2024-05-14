// function Person(nombre,apellido,edad,profesion, hobbies){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.profesion;
//     this.hobbies
// }
// Person.prototype.saludar = function(){
//     return "Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad"
// }
// function Student(nombre,apellido,edad,promedio,cursos){
//     Person.call(this,nombre,apellido,edad)
//     this.promedio = promedio
//     this.cursos = cursos
// }

function Producto(nombre,valor,categoria){
    this.nombre = nombre
    this.valor = valor
    this.categoria = categoria
}
Producto.prototype.Puntos = function(){
    return `El valor de este articulo(${this.nombre}) es ${this.valor}`
}
function Usuario(nombre,edad,puntos,rol){
    this.nombre = nombre
    this.edad = edad;
    this.puntos = puntos;
    this.rol = rol;
}
Usuario.prototype.GetPoints = function(){
    let actividad = prompt("Terminaste la actividad?")
    actividad.toLowerCase()
    if (actividad == "si"){
    return `el valor de tus puntos es ${this.puntos ++}`}
    else {
        return console.log("Actividad primero, puntos despues")
    }
}
let papaya = new Producto("Papaya",200,"fisico")
let tenis = new Producto("Tenis",1000,"fisico")
let sandalia = new Producto("Sandalia",600,"fisico")
let kiwi =new Producto("kiwi",100,"fisico")

console.log(papaya)
console.log(papaya.Puntos())

function ProductoDigital(nombre,valor,categoria,disponible,tipo,tiempo){
    Producto.call(this,nombre,valor,categoria)
    this.tipo = tipo
    this.tiempo = tiempo
}
ProductoDigital.prototype = Object.create(Producto.prototype)
ProductoDigital.prototype.constructor = ProductoDigital;
let EldenRing = new ProductoDigital("EldenRing",800,"digital","juego","sin caducidad")
ProductoDigital.prototype.GetKey = function(){
    return `${Producto.prototype.Puntos.call(this)} y La clave para este producto es 'S0PL4r m0nd4'`
}
console.log(EldenRing.GetKey())
let caliche = new Usuario("Carlos",28,0,"usuario")
caliche.GetPoints()
caliche.GetPoints()
caliche.GetPoints()
caliche.GetPoints()

console.log(caliche.puntos)
function Admin(nombre,edad,rol,admonkey){
    Usuario.call(this,nombre,edad,rol)
        this.admonkey
    
}
Admin.prototype = Object.create(Admin.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.CrearActividad = function(){
    let trivia = prompt("Cual es la mejor pelicula del mundo?")
    if (trivia.toLowerCase() == interestellar){
        console.log("Correcto")
    }
    else{console.log("Sos un inculto")}
}
