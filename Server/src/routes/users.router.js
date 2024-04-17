const {Router}= require("express")
const usersControllers= require("../controllers/users")

const router=Router()

router.post("/register", usersControllers.createUsers)



module.exports= router