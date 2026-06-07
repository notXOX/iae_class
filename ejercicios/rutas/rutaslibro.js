import express from "express" // importamos el modulo de express
import {
    mostrarInicio,
    mostrarLibros,
    mostrarFormulario,
    mostrarLibro
} from "../controladores/controladores.js" // importamos las funciones de las rutas


const router = express.Router() // creamos la variable "router" para crear las rutas de la pagina


router.get("/", mostrarInicio) // ruta 1 (pagina principal)
router.get("/libros", mostrarLibros) // ruta 2 (listado de libros)
router.get("/libros/nuevo", mostrarFormulario) // ruta 3 (formulario para agregar nuevos libros)
router.get("/libros/:id", mostrarLibro) // ruta 4 (detalle de un libro)

export {
    router
}