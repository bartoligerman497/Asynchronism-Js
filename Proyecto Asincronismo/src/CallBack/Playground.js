
/* Playground: Ejecuta un callback con 2s de demoraClase 7 / 26

setTimeout(gretting, 2000, 'German');

Tienes la funci�n execCallback que recibir� un callback es decir una funci�n como par�metro, tu reto es ejecutar esa funci�n con un tiempo de demora de 2 segundos.

Para hacer que la funci�n se demore 2 segundos debes usar la funci�n setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecuci�n de pruebas, ejemplo:

window.setTimeout(() => {
    // code
})

Dentro del cuerpo de la funci�n execCallback debes escribir tu soluci�n.

    Ejemplo:

Input:
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

Output:
// Execute myFunc 2s after
*/

export function runCode(callback) {
    window.setTimeout(callback, 2000)
}