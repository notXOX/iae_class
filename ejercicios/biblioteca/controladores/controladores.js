import prisma from "../prismaClient.js"

const listarLibros = async (req, res) => {
    try {
        const libros = await prisma.libro.findMany()
        res.render("libros", { libros })

    } catch(error){
        console.log(error)
        res.status(500).send("Error del servidor :(")
    }
}

const mostrarFormulario = (req, res) => {
    res.render("nuevolibro")
}

const detalleLibro = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const libro = await prisma.libro.findUnique({
            where: { id }
        })

        if(!libro){
            return res.status(404).send("Libro no encontrado :x")
        }

        res.render("detallelibro", { libro })

    } catch(error){
        console.log(error)
        res.status(500).send("Error del servidor :(")
    }
}

const crearLibro = (req, res) => {
    try {
        const {
            titulo,
            autor,
            categoria,
            anio
        } = req.body

        if(
            !titulo ||
            !autor ||
            !categoria ||
            !anio
        ){
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios :/"
            })
        }

        const libro = await prisma.libro.create({
            data: {
                titulo,
                autor,
                categoria,
                anio: Number(anio)
            }
        });

        res-status(201).json({
            mensaje: "Libro creado :)",
            libro
        });

    } catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "Error interno :s"
        })
    }
}

const prestarLibro = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const libro = await prisma.libro.findUnique({
            where: { id }
        });

        if(!libro){
            return res.status(404).json({
                mensaje: "Libro no encontrado :x"
            })
        }

        if( libro.estado === "Prestado" ){
            return res.status(400).json({
                mensaje: "El libro ya está prestado :x"
            })
        }

        const prestamo = await prisma.prestamo.crate({
            data: { libroId = id }
        });

        await prisma.libro.update({
            where: { id },
            data: { estado: "Prestado" }
        });

        res.json({
            mensaje: "Préstamo registrado :)",
            prestamo
        });

    } catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "Error interno :s"
        })
    }
}

const devolverLibro = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const libro = await prisma.libro.findUnique({
            where: { id }
        });

        if(!libro){
            return res.status(404).json({
                mensaje: "Libro no encontrado :x"
            });
        }

        if( libro.estado === "Disponible" ){
            return res.status(400).json({
                mensaje: "El libro ya está disponible :)"
            });
        }

        const devolucion = await prisma.devolucion.create({
            data: { libroId: id }
        });

        await prisma.libro.update({
            where: { id },
            data: { estado: "Disponible"}
        });

        res.json({
            mensaje: "Devolución registrada :)"
        });

    } catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "Error interno :x"
        })
    }
}

const buscarCategoria = async (req, res) => {
    try {
        const { categoria } = req.body
        const libros = await prisma.libro.findMany({
            where: { categoria: { equals: categoria } }
        });
        
        res.render("libros", { libros })

    } catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "Error interno :x"
        })
    }
}

export {
    listarLibros,
    mostrarFormulario,
    detalleLibro,
    crearLibro
}