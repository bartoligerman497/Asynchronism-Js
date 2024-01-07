/*

En este desaf�o tienes la funci�n delay la cual se espera que un tiempo espec�fico retorne un mensaje

La funci�n deber� recibir dos par�metros:

time: el tiempo de espera
message: el mensaje que debe imprimir despu�s del tiempo de espera
La funci�n delay debe retornar una promesa para poderlo usarlo de forma as�ncrona.

    Nota: Debes usar la funci�n setTimeout con el namespace window para poder monitorear su uso en la ejecuci�n de pruebas, ejemplo:

window.setTimeout(() => {
    // code
})

Ejemplo 1:

Input:
delay(2000, "Hello after 2s")
    .then((message) => console.log(message))

Output:
// after 2s
"Hello after 2s"

Ejemplo 2:

Input:
delay(3000, "Hello after 3s")
    .then((message) => console.log(message))

Output:
// after 3s
"Hello after 3s"

*/

export function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message);
        }, time);

    });
}
