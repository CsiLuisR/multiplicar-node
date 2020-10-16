/* setTimeout(() => {
	console.log('hola mundo')
}, 3000)
*/

/* let getUserById = (id, callback) => {
	let usuario = {
		nombre: 'luis',
		id,
    }
    
    if (id === 20) {
        callback(`el usuario con id ${id} no existe en la BD`)
 
    } else {
      
	    callback(usuario)
    }

}

getUserById(10, usuario => {
	console.log('usuario de base de datos', usuario)
})
*/

let empleados = [
	{
		id: 1,
		nombre: 'fernando',
	},
	{
		id: 2,
		nombre: 'luis',
	},
	{
		id: 3,
		nombre: 'oscar',
	},
]

let salarios = [
	{
		id: 1,
		salario: 1000,
	},
	{
		id: 2,
		salario: 2000,
	},
]

let getEmpleado = (id, callback) => {
	let empleadoDB = empleados.find(empleado => empleado.id === id)

	if (!empleadoDB) {
		callback(`no existe un empleado con id ${id}`)
	} else {
		return callback(null, empleadoDB)
	}
}

let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find(salario => salario.id === empleado.id)

	if (!salarioDB) {
		callback('no se encontro el salario para el usuario')
	} else {
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
		})
	}
}

let empleadofinal = getEmpleado(3, (err, empleado) => {
	if (err) {
		return console.log(err)
	}
	return empleado
})

getSalario(empleadofinal, (err, res) => {
	if (err) {
		return console.log(err)
	}
	console.log(`el salario de ${res.nombre} es de ${res.salario}`)
})
