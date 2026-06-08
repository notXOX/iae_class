import { libros } from "../data/bd.js"

const mostrarInicio = (req, res) => {
    res.render("index")
}

const mostrarLibro = async (req, res) => {
    let buscar_libro = await libros.find(l => l.id == req.params.id)
    res.render("detallelibros", {
        libro: buscar_libro
    })
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