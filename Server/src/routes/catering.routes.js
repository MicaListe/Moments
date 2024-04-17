const {Router}=require("express")
const cateringControllers=require("../controllers/catering")

const router=Router()

router.post("/create_catering", cateringControllers.createCatering)
router.get("/catering", cateringControllers.allCatering)
router.delete("/delete_catering/:id", cateringControllers.deleteCatering)
router.put("/update_catering/:id", cateringControllers.updateCatering)

module.exports= router

