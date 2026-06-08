const libros = [
    {id: 1, titulo:"Don Quijote de la Mancha", autor:"Miguel Cervantes", genero:"Fantasia"}
]
const getLibro = () => libros // obtengo todos los libros

const getLibroById = (id) => {
    return libros.find(libro => libro.id == id)
} // buscamos el libro por id

const addLibro = (libro) => {
    const nuevoLibro = {
        id: libros.length > 0 ? libros[libros.length - 1].id + 1 : 1,
        ...libro
    }
    libros.push(nuevoLibro)
    return nuevoLibro
}

export {
    libros,
    getLibro,
    addLibro
}