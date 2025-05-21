function promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa ejecutada")
        },8000)
    })
}


// Funcion con aync


async function ejecutar(){
    try {
        console.log("promesa ejecutandose...")
        const respuesta = await promesa()
        console.log(respuesta) 
    } catch (error) {
        console.error("✖️ Error al descargar",error)
    }
}

ejecutar()