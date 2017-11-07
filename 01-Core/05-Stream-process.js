'use strict'

const stdin = process.stdin;
const stdout = process.stdout;
const person = {
    name: null,
    age: 0
}

function saveAge(age) {
    person.age = age;

    // Escribirá en la consola una cosa o la otra dependiendo de la edad de la persona
    if (person.age >=18) {
        stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n');
    } 
    else {
        stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n');
    }

    process.exit(); // exit() permite salir de la ejecución del stream

}

function saveName(name) {
    person.name = name; // Le asigna a la propiedad name de person el nombre escrito en consola

    let question = `Hola ${person.name}, ¿Cuantos años tienes?`;

    quiz(question, saveAge) // Vuelve a ejecutar la funcion quiz() con la pregunta y guardará la edad
}

function quiz(question, callback) {
    stdin.resume(); // resume() permite leer lo que se escriba en la consola
    stdout.write(question + ': '); // write() escribe a la consola

    stdin.once('data', (res) => { // once(...) es como 'on' pero ejecuta una sola vez
        callback( res.toString().trim() );
    })
}

stdin.setEncoding('utf8'); // Indica que todo lo que entre a la consola de comandos se codifique en utf8
quiz('¿Cómo te llamas?', saveName)