require('colors')
const { guardarDB, leerDB } = require ('./helpers/guardarArchivo')
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
// const { pausa } = require('./helpers/messages')
// const { mostrarMenu, pausa } = require('./helpers/messages')

console.clear()

const main = async() => {
    let opt = ''
    const tareas = new Tareas
    const tareasDB = leerDB()

    do {
        opt = await inquirerMenu()
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea( desc )
                console.log(desc)
            break

            case '2': 
            console.log(tareas.listadoArr)
        }

        guardarDB(tareas.listadoArr)
        await pausa()
    }

    while (
        opt !== '0'
    )
}

main();