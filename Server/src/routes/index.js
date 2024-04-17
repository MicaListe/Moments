const {Router}= require("express")
const events=require("./events.routes")
const catering=require("./catering.routes")


const router= Router()


router.use("/events", events)
router.use("/catering", catering)
//Creacion de datos
// router.post("/create_events", createEvent)
// router.post("/create_catering")
// router.post("/create_decoration")
// router.post("/create_places")

//Traer datos
// router.get("/events")
// router.get("/catering")
// router.get("/decoration")
// router.get("/places")

//Eliminar datos
// router.delete("/delete_event")
// router.delete("/delete_catering")
// router.delete("/delete_decoration")
// router.delete("/delete_places")

// //Actualizar datos
// router.put("/update_catering")
// router.put("/update_decoration")
// router.put("/update_places")

// //Crear usuario
// router.post("/register")

module.exports= router