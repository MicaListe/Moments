const {Router}= require("express")
const usersControllers= require("../controllers/users")

const router=Router()

router.post("/register", usersControllers.createUsers)
router.get("/usuarios", usersControllers.allUsers)
router.delete("/delete_users/:id", usersControllers.deleteUser )


module.exports= router