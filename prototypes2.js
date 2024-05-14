function Person(nombre,apellido,edad,profesion, hobbies){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion;
    this.hobbies
}
Person.prototype.saludar = function(){
    return "Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad"
}
function Student(nombre,apellido,edad,promedio,cursos){
    Person.call(this,nombre,apellido,edad)
    this.promedio = promedio
    this.cursos = cursos
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function (){
    console.log("Estoy presentando un examen.");

};

Student.prototype.saludar = function () {
    return '${Person.prototype.saludar.call(this)} Y soy un estudiante.';
}