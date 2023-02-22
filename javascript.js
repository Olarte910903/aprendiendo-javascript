//Scope de variables

var cedula = 1999999999;  //Scope global
let fecha = "enero" //Scope de bloque
const redBull = 91; //Constante scope de bloque

//Arrow functions

const square = (num) => {
    return num * num;
}

//Parámetros por defecto

function newUser(name, age, country){
    var name = name || "Miguel";
    var age = age || 31;
    var country = country || "Colombia";

    console.log(name);
    console.log(age);
    console.log(country);
}

function newAdmin (name ="Miguel", age = 31, country ="Colombia"){
    console.log(name, age, country);
}

newUser();
newAdmin();

//Template literals
function metodoGauss(nombre){
  console.log(`Hola ${nombre} como estàs `)
}

metodoGauss('miguel');


//Destructuración de arrays
let frutas = ['pera', 'manzana', 'mandarina'];
let [a,b,c] = frutas;


console.log(a,b,c);

//Destructuracion de objetos
const usuario ={
  username:'Miguel',
  cedula:'1094922554',
  telefono:'3126373094'
}

let {username, cedula, telefono} = usuario;

console.log(username, telefono)

/*Funciones declarativas:
Son funciones que tienen hoisting se pueden invocar antes de ser
declaradas.*/
saludar()//Acá está siendo invocada antes.

function saludar(){
  console.log('hola');
}
saludar()//Acá está declarada después.

/*Funciones de expresión:
Estas funciones se deben declarar antes de mandarlas a llamar*/

const saludarDia = function (){
  console.log('Buenos días');
}
saludarDia(); //Se debe llamar después de su declaración.

//Operador ternario

let edadPermitida = 18;
let edadUsuario = 14;

edadUsuario > edadPermitida ? "Bienvenido":"Aun eres menor de edad"

const numeros = [2,3];
numeros.push(5);
numeros

//Programación orientada a objetos clases
class Usuario {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  
  get uAge(){
    return this.age;
  }
  
  set uAge(n){
    this.age = n;
  }
}

const nuevoUsuario = new Usuario('Miguel', 31);

nuevoUsuario.uAge = 3;
console.log(nuevoUsuario.uAge);

let verdadero = true;
let falso = false;

verdadero ? 'hola' : 'bienvenido'; // operador ternario

//async await

const fnAsync = () => {
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(()=> resolve('Async'),2000)
    : reject(new Error('Error!'));
  });
}

const anotherFn = async()=>{
  const something = await fnAsync();
  console.log(something);
  console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');


const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec('2022-02-05');

console.table(matchers);

const array = [1,2,3,[4,5,6,[7,8,9]]];

console.log(array.flat(3));

const array2 = [1,2,3,4,5];

console.log(array2.flatMap(v => [v, v*2]));

//promise all settled

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve1'));
const promise3 = new Promise((resolve, reject) => resolve('resolve2'));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

const scroll = globalThis.scroll;

console.log(scroll);





const arreglito = [1, 'mama', 2, true, ];

console.log(typeof arreglito[4]);
