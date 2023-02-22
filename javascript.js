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

console.log(username, telefono);

/*Spread Operator
Agrega nueva información a los objetos ya creados.
Gracias al spread operator vamos a poder traer todo lo que se encuentre en un objeto
y asignarlo sin ningún inconveniente.
*/

let person = {name:"Miguel", age:31};
let country = "COL";

let data = {...person, country};
console.log(data);

/*
Parámetros Rest
los parámetros rest son una característica que permite a una función aceptar
un número variable de argumentos. Se utilizan para definir un parámetro
de función que puede aceptar un número variable de argumentos,
que se pueden acceder dentro de la función a través de un arreglo.
Aquí, los tres puntos (...) antes del nombre del parámetro args 
indican que args es un parámetro rest, lo que significa que puede 
.aceptar cualquier número de argumentos. Dentro de la función, args se trata como un arreglo
*/

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,2,3);

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

// operador ternario

verdadero ? 'hola' : 'bienvenido'; 

/*
**Promesas**

Las promesas son un concepto fundamental en JavaScript que se utiliza para manejar la asincronía
en el lenguaje. Las promesas permiten ejecutar código asincrónico y realizar tareas como solicitudes 
de red, lectura y escritura de archivos, y otras operaciones que pueden tomar tiempo en completarse, 
sin bloquear el hilo principal de ejecución.

Una promesa representa un valor que puede no estar disponible en el momento en que se crea la promesa,
pero que se espera que esté disponible en algún momento futuro. La promesa puede estar en uno de tres estados:
pending (pendiente), fulfilled (cumplida) o rejected (rechazada).

let promesa = new Promise(function(resolve, reject) {
  --Código asincrónico
});
En este ejemplo, se crea una promesa utilizando la palabra clave new seguida de la clase Promise. 
El constructor de la promesa recibe una función que contiene código asincrónico y dos parámetros: 
resolve y reject. resolve se utiliza para indicar que la promesa se ha cumplido exitosamente, 
mientras que reject se utiliza para indicar que la promesa se ha rechazado debido a un error.

Cuando la promesa se cumple, se puede utilizar el método then para ejecutar una función con el valor resultante:

promesa.then(function(valor) {
  --Código a ejecutar cuando la promesa se cumple
});

Cuando la promesa se rechaza, se puede utilizar el método catch para ejecutar una función con el error resultante:


promesa.catch(function(error) {
  --Código a ejecutar cuando la promesa se rechaza
});

Las promesas también pueden encadenarse utilizando el método then. Por ejemplo:

promesa.then(function(valor1) {
  --Código a ejecutar cuando la primera promesa se cumple
  return valor2;
}).then(function(valor2) {
  --Código a ejecutar cuando la segunda promesa se cumple
}).catch(function(error) {
  --Código a ejecutar cuando se produce un error en alguna de las promesas
});
En este ejemplo, la segunda función then se ejecuta después de que la primera promesa se cumple 
y devuelve un valor valor2. La segunda función then se puede encadenar a la primera porque devuelve 
una nueva promesa. Si alguna de las promesas se rechaza, el control se transfiere al método catch.

En resumen, las promesas son una forma poderosa y flexible de manejar la asincronía en JavaScript, 
y son fundamentales para el desarrollo de aplicaciones web modernas.




Regenerate response
*/

const anotherFunction = () => {
    return new Promise ((resolve, reject) => {
        if(false){
            resolve ('Hey!');
        }else{
            reject('Whoops!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err));

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
