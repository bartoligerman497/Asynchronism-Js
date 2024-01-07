// Algo que va a pasar, ahora despu�s o nunca

const promie = new Promise(function (resolve, reject) {
    resolve('Todo correcto')
})

// const cows = 15;
const cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject("There is no cows on the farm")
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));