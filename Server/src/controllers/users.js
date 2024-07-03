const {Usuario} = require("../db")

const usersControllers={

    createUsers:async(req,res)=>{
        try{

            const {name, mail, password, roleId}= req.body

            if(!name || !mail || !password || !roleId){
                res.status(400).json({message:"Faltan datos"})
            }

            const createUser= await Usuario.create({
                name,
                mail,
                password,
                roleId
            })
            res.status(200).json(createUser)

        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
            console.error(error)
        }
    },

    allUsers: async (req,res)=>{
        try{
            const users= await Usuario.findAll()
            console.log("users", users)
            res.status(200).json(users)
            
        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
            console.log(error)
        }
    }
}
module.exports= usersControllers