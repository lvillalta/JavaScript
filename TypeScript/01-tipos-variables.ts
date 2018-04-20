/**
 * Created by Usuario on 20/4/2018.
 */
//var nombre="Luis";
let segundoNombre = 'Danilo';
const cedula = '1718137159';
segundoNombre = 'Luis';
//cedula='1723072993'; //Da error read-only
const URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre=123; //Duck Typing

let nombre: String;
let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;
//let mascotas:object ={};
class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        //Template String TILDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es :${this.mCedula}, la edad del usuario es: ${this.mEdad}`);
    }
}

let usuario: Usuario = new Usuario('Luis', 28, '1290382993');
console.log(usuario);