const {Router}=require("express")
const decorationControllers=require("../controllers/decoration")

const router=Router()


router.post("/create_decoration", decorationControllers.createDecoration)
router.get("/decoration", decorationControllers.allDecoration)
router.get("/decoration/:id", decorationControllers.decorationById)
router.delete("/delete_decoration/:id", decorationControllers.deleteDecoration)
router.put("/update_decoration/:id", decorationControllers.updateDecoration)

module.exports= router