/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);

//Funcion para conocer el numero de formas para subir las escaleras
function fibonacci(num){
    let num1=0;
    let num2=1;
    let sum;
    let i=0;
    for (i = 0; i < num; i++) {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
//función para querar archivo output.txt
function WriteToFile(text){ 
    var fs = require('fs');

    fs.writeFile("output.txt",text.toString(), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("El archivo fue creado correctamente");
    });
}

//Procedimiento 
let prompt = require("prompt");
prompt.start();

console.log("Ingresa el número de peldaños de las escaleras"); //Obtener el numero de peldaños que ingrese el usuario

prompt.get(["name"], function(err, res){
    let num = parseInt(res.name);
    let numformas = fibonacci(num);
    WriteToFile(numformas);
    console.log(numformas);
});