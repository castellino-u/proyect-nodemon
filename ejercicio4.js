// Importamos el módulo readline para poder leer datos ingresados por el usuario desde la consola
import readline from 'readline';
// Importamos el módulo fs/promises para trabajar con archivos usando promesas (async/await)
import fs from 'fs/promises';
// Se importa 'error' desde 'console', aunque en este código no se usa explícitamente
import { error } from 'console';

// Creamos la interfaz para leer datos desde la consola
const rl = readline.createInterface({
    input: process.stdin,   // Entrada estándar (teclado)
    output: process.stdout  // Salida estándar (consola)
});

// Función asíncrona para leer el contenido del archivo 'datos_usuario.txt'
async function readFile() {
    try {
        // Espera a leer el archivo y guarda su contenido en la variable 'data'
        const data = await fs.readFile('datos_usuario.txt', 'utf-8');
        // Muestra el contenido del archivo en la consola
        console.log(data);
    } catch (error) {
        // Si ocurre un error al leer el archivo, se muestra por consola
        console.log(error);
    }
}

// Comenzamos preguntando al usuario su nombre
rl.question("¿Cuál es su nombre? ", (res) => {
    const nombre = res; // Guardamos la respuesta en la variable 'nombre'

    // Luego preguntamos la edad
    rl.question("¿Cuál es su edad? ", (res) => {
        const edad = res; // Guardamos la edad

        // Finalmente preguntamos el correo electrónico
        rl.question("¿Cuál es su correo? ", (res) => {
            const correo = res; // Guardamos el correo

            // Función que arma una cadena de texto con los datos del usuario
            const userData = (nombre, edad, correo) => {
                return `nombre: ${nombre}\nedad: ${edad}\ncorreo: ${correo}\n`;
            }

            rl.close(); // Cerramos la interfaz de entrada, ya no se necesitan más datos

            // Guardamos los datos en el archivo 'datos_usuario.txt'
            // Usamos appendFile para agregar al final del archivo sin borrar el contenido anterior
            fs.appendFile('datos_usuario.txt', userData(nombre, edad, correo));

            // Llamamos a la función que lee el archivo y muestra su contenido actualizado
            readFile();
        });
    });
});
