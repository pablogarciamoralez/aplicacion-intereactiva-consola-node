require('colors')
const { mostrarMenu, pausa } = require('./helpers/messages')

console.clear()

const main = async() => {
    mostrarMenu()
    pausa()
}

main();