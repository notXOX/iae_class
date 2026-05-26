import { router, ruta } from "./config.js"
import { usuarios } from "./bd.js"

router.get("/", (req, res) => {
    res.render("index.hbs", {usuarios})
})

router.post("/usuario:id", async (req, res) => {
    let buscar_usuarios = await usuarios.find(usuario => usuario.cedula == req.params.id)
    res.send(buscar_usuarios)
})