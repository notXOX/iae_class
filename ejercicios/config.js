import express from "express" // llamo al modulo express
import { fileURLToPath } from "url" // esto para obtener las rutas del archivo actual
import { dirname } from "path" // para obtener las rutas del directorio actual
import hbs from "hbs" // para implementar plantillas y partials 

const __filename = fileURLToPath(import.meta.url) // para obtener rutas del archivo actual
const __dirname = dirname(__filename) // para obtener rutas del directorio actual
const ruta = `${__dirname}/views` // definimos la ruta para los archivos que utilizaremos
const servidor = express() // le paso la configuracion del servidor a la variable servidor

servidor.use(express.json()) // para que el servidor trabaje con json
servidor.use(express.urlencoded({ extended: true })); 
servidor.use(express.static(ruta)) // definimos archivos estaticos
servidor.set("view engine", "hbs") // para utilizar hbs como motor de plantillas
hbs.registerPartials(`${__dirname}/views/partials`) // registramos los parciales que se usaran

export {
    ruta,
    servidor
}
// exportamos esos objetos