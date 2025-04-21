import { sumar } from './math.js';
import dotenv from 'dotenv';

//ejercicio 1
dotenv.config();

console.log("Hola mundo usando nodemon");

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);


//ejercicio 2
console.log(sumar(15, 35));


//ejercicio 3 - pedir datos por consola con deadline

console.log("Sistema operativo: ", process.platform);
console.log("user db: ", process.env.DB_USER);

//
