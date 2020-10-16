const fs = require('fs')

let escalera = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {
		const range = (start, stop) =>
			Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + i * 1)

		let res = range(1, limite).map(acc => `${acc} * ${base} = ${acc * base} \n`)

		fs.writeFile('multiplicar/tablas/tabla.txt', res, err => {
			if (err) reject(err)
			else resolve('El archivo a sido guardado')
		})
	})
}

let listarTabla = (base, limite) => {
	const range = (start, stop) =>
		Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + i * 1)
	range(1, limite).map(acc =>
		console.log(`${acc} * ${base} = ${acc * base} \n`)
	)
}

module.exports = { crearArchivo, listarTabla }
