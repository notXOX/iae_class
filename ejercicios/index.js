import { router } from "./rutas/rutaslibro.js" // importamos el router donde estan las rutas
import { servidor } from "./config.js" // importamos la configuracion del servidor 

servidor.use(router) // le decimos al servidor que use router
servidor.listen(4000) // el servidor se levanta en el puerto 4000