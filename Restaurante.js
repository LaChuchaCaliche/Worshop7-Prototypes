function Menu(plato,precio){
    this.plato = plato
    this.precio = precio
}
Menu.prototype.showMenu = function(){
    return console.log(Menu.plato)
}
function MenuDigital(plato,precio,qr,direccion){
    Menu.call(this(plato,precio))
    this.qr = qr
    this.direccion = direccion
}
MenuDigital.prototype = Object.create(Menu.prototype);
MenuDigital.prototype.constructor = MenuDigital;
MenuDigital.prototype.showMenu = function(){
    return Menu.prototype.showMenu.call(this) + "QR"
}

function Persona(nombre,edad,rol){
    this.nombre=nombre;
    this.edad = edad ;
    this.rol = rol;
}
Persona.prototype.Saludar = function (){
    return `Hola soy ${this.nombre} y para el restaurante soy ${this.rol}` 
}
function Cliente(nombre,edad,rol,pedido){
    Persona.call(this,nombre,edad,rol)
    this.pedido = pedido
}
Cliente.prototype = Object.create(Cliente.prototype)
Cliente.prototype.constructor = Cliente
Cliente.prototype.HacerPedido = function (){
    return `${Persona.prototype.Saludar.call(this)} y mi pedido es ${this.pedido}`
}
let pabito = new Cliente("Pablo",14,"cliente","papas")
console.log(pabito.HacerPedido())
