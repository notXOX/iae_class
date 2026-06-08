const libros = [
    {id: 1, titulo:"Don Quijote de la Mancha", autor:"Miguel Cervantes", genero:"Fantasia"}
]
const getLibro = () => libros
const addLibro = (libro) => {
    libros.push(libro)
}

export {
    libros,
    getLibro,
    addLibro
}