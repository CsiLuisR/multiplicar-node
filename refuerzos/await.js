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

let getEmpleado = async id => {
	let empleadoDB = empleados.find(empleado => empleado.id === id)

	if (!empleadoDB) {
		throw new Error('no existes')
	} else {
		return empleadoDB
	}
}

let getSalarios = empleado => {
	let salarioDB = salarios.find(salario => salario.id === empleado.id)

	if (!salarioDB) {
		throw new Error('no hay salarios')
	} else {
		return {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
		}
	}
}

let getInformacion = async id => {
	let empleado = await getEmpleado(id)
	let resp = await getSalarios(empleado)
	return `${empleado.nombre} tiene un salario de ${resp.salario} `
}

getInformacion(1)
	.then(mensaje => console.log(mensaje))
	.catch(err => console.log(err))
