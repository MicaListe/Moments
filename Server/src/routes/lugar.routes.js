const {Router}= require("express")
const lugarControllers= require("../controllers/places")

const router= Router()

router.post("/create_places", lugarControllers.createPlaces)
router.get("/places",lugarControllers.allPlaces)
router.delete("/delete_places", lugarControllers.deletePlace)
router.put("/update_places",lugarControllers.updatePlaces)