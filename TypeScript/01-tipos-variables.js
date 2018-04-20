/**
 * Created by Usuario on 20/4/2018.
 */
//var nombre="Luis";
var segundoNombre = 'Danilo';
var cedula = '1718137159';
segundoNombre = 'Luis';
//cedula='1723072993'; //Da error read-only
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre=123; //Duck Typing
var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
//let mascotas:object ={};
var Usuario = (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template String TILDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es :" + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Luis', 28, '1290382993');
console.log(usuario);
