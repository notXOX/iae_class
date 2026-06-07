import express from "express"
import {
    mostrarInicio,
    mostrarLibros,
    mostrarFormulario,
    mostrarLibro
} from "../controladores/controladores.js"


const router = express.Router() // creamos la variable "router" para crear las rutas de la pagina


router.get("/", mostrarInicio)
router.get("/libros", mostrarLibros)
router.get("/libros/nuevo", mostrarFormulario)
router.get("/libros/:id", mostrarLibro)

export {
    router
}