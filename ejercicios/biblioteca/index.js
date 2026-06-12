import express from "express"
import hbs from "hbs"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ruta = `${__dirname}/views`
const servidor = express()

servidor.use(express.json())
servidor.use(express.urlencoded({
    extended: true
}))
servidor.use(express.static(ruta))
servidor.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)

servidor.get("/", (req, res) => {
    res.render("home")
})

servidor.listen(4000, () => {
    console.log("Servidor iniciado en puerto: 4000")
})