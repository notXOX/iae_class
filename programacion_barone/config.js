import express from "express" // llamamos al modulo express
import { fileURLToPath } from "url" // para obtener las rutas del archivo actual
import { dirname } from "path" // para obtener las rutas del directorio actual

const __filename = fileURLToPath(import.meta.url) // para obtener las rutas del archivo actual
const __dirname = dirname(__filename) // para obtener las rutas del directorio actual
const ruta = `${__dirname}/views`

const servidor = express()
const router = express.Router()

servidor.listen(4000)
servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.set("view engine", "hbs")
servidor.use(router)

export {
    router,
    ruta,
    servidor
}