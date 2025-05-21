// funcion para simular la descarga de un archivo, utilizando promesas

function descargarArchivo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("📁 Archivo descargado con éxito...")
        },5000)
    })
}

console.log(descargarArchivo()
    .then((resultado) => {
        console.log(resultado)
    })
)