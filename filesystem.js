const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]
let base = argv.base
let limite = argv.limite

switch (comando) {
	case 'crear': {
		crearArchivo(base, limite)
			.then(value => console.log('Archivo Creado'))
			.catch(e => console.log(e))
		break
	}
	case 'listar': {
		listarTabla(base, limite)
		break
	}
}
/* 
console.log(argv.base, 'limite', argv.limite) */

/* crearArchivo(base)
	.then(value => console.log('Archivo Creado'))
	.catch(e => console.log(e))
 */
