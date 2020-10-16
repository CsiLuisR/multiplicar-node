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

let getEmpleado = id => {
	return new Promise((res, rej) => {
		let empleadoDB = empleados.find(empleado => empleado.id === id)

		if (!empleadoDB) {
			rej('no existes')
		} else {
			res(empleadoDB)
		}
	})
}

let getSalarios = empleado => {
	return new Promise((res, rej) => {
		let salarioDB = salarios.find(salario => salario.id === empleado.id)

		if (!salarioDB) {
			rej('no hay salarios')
		} else {
			res({
				nombre: empleado.nombre,
				salario: salarioDB.salario,
			})
		}
	})
}

let respuesta = getEmpleado(3).then(
	value => {
		getSalarios(value).then(
			salario => {
				console.log('salario es ', salario)
			},
			err => {
				console.log(err)
			}
		)
	},
	err => {
		console.log(err)
	}
)
