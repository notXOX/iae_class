import express from "express"
import {
    listarLibros,
    mostrarFormulario,
    detalleLibro,
    crearLibro,
    prestarLibro,
    devolverLibro,
    buscarCategoria
} from "../controladores/controladores.js"

const router = express.Router()

router.get("/libros", listarLibros)
router.get("/libros/nuevo", mostrarFormulario)
router.get("/libros/:id", detalleLibro)


router.post("/", crearLibro)
router.post("/prestamos/:id", prestarLibro)
router.post("/devolucion/:id", devolverLibro)
router.post("/buscar", buscarCategoria)

//router.patch("/:id", modificarLibro)
//router.patch("/estado/:id", cambiarEstado)
//router.patch("/categoria/:id", actualizarCategoria)
//router.patch("/autor/:id", actualizarAutor)

//router.delete("/:id", eliminarLibro)
//router.delete("/prestamo/:id", eliminarPrestamo)
//router.delete("/devolucion/:id", eliminarDevolucion)
//router.delete("/categoria/:id", eliminarCategoria)

export {
    router
}