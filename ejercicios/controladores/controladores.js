import { libros } from "../data/bd.js"

const mostrarInicio = (req, res) => {
    res.render("index")
}

const mostrarLibro = (req, res) => {
    res.render("detallelibros")
}

const mostrarLibros = (req, res) => {
    res.render("listadolibros", {libros})
}

const mostrarFormulario = (req, res) => {
    res.render("formulariolibros")
}

const nuevoLibro = (req, res) => {
    const nuevoLibro = {
        id: Date.now(),
        ...req.body}

        console.log(nuevoLibro)
    res.redirect("/libros")
}



export {
    mostrarInicio,
    mostrarLibro,
    mostrarLibros,
    mostrarFormulario,
    nuevoLibro
}