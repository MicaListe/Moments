const {Router}= require("express")
const events=require("./events.routes")
const catering=require("./catering.routes")
const places= require("./lugar.routes")
const decoration=require("./decoration.routes")
const users= require("./users.router")
const upload= require("./upload.routes")

const router= Router()

router.use("/events", events)
router.use("/catering", catering)
router.use("/places", places)
router.use("/decoration", decoration)
router.use("/users",users)
router.use("/upload", upload)
// //Crear usuario
// router.post("/register")

module.exports = router