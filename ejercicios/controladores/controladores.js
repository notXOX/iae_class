const mostrarInicio = (req, res) => {
    res.render("index")
}

const mostrarLibro = (req, res) => {
    res.render("detallelibros")
}

const mostrarLibros = (req, res) => {
    res.render("listadolibros")
}

const mostrarFormulario = (req, res) => {
    res.render("formulariolibros")
}

export {
    mostrarInicio,
    mostrarLibro,
    mostrarLibros,
    mostrarFormulario
}