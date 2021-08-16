const argv = require('yargs') //Configuro comando de consola
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false, 
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Tabla de multiplicar hasta el X'
    })
    .check( (argv,options) =>{
        if( isNaN( argv.b ))
            throw 'La base debe ser un numero';
        else
            return true;
    })
    .argv;

    module.exports = argv;