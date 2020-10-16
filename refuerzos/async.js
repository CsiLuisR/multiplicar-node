let getNombre = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('luis')
		}, 3000)
	})
}

let saludo = async () => {
	let nombre = await getNombre()

	return `hola ${nombre}`
}

saludo().then(mensaje => {
	console.log(mensaje)
})
