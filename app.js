require('colors')
const { inquirerMenu, pausa } = require('./helpers/inquirer')
// const { pausa } = require('./helpers/messages')
// const { mostrarMenu, pausa } = require('./helpers/messages')

console.clear()

const main = async() => {
    let opt = ''
    do {
        opt = await inquirerMenu()
        await pausa()
        // if (opt !== '0') await pausa()
    }

    while (
        opt !== '0'
    )
}

main();