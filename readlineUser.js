import readline from 'readline';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ejercicio 1 

// rl.question('¿Cuál es tu nombre? ', (nombre) => {
//     console.log(`Hola, ${nombre}!`);
//     rl.close();
// });

//ejercicio 2

rl.question('¿Cuál es tu edad? ', (edad) => {

    const añoNacimiento = new Date().getFullYear() - parseInt(edad);

    console.log(`Su año de nacimiento es:  ${añoNacimiento}!`);
    
    rl.close();
});

//ejercicio 4

