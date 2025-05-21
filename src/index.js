function descargarArchivo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("📁 Archivo descargado con éxito...")
        },5000)
    })
}


// Funcion con aync


async function ejecutar(){
    try {
        console.log("⌛ descarga en proceso..")
        const respuesta = await descargarArchivo()
        console.log(respuesta) 
    } catch (error) {
        console.error("✖️ Error al descargar",error)
    }
}

ejecutar()