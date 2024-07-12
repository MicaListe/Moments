const {Usuario} = require("../db")

const usersControllers={

    createUsers: async (req, res) => {
        try {
            const { name, mail, password, roleId } = req.body;

            // Verificar si el correo electrónico ya está registrado
            const existingUser = await Usuario.findOne({ where: { mail } });
    
            if (existingUser) {
                return res.status(400).json({ message: "El correo electrónico ya está registrado." });
            }else{
                const createUser = await Usuario.create({
                    name,
                    mail,
                    password,
                    roleId
                });
    
                res.status(200).json(createUser);
            }      
        } catch (error) {
            res.status(500).json({ error: "Error interno del servidor" });
            console.error(error);
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
    },
    deleteUser: async (req, res)=>{
        try{

            const id = req.params.id
            const encontrado= await Usuario.findByPk(id)

            if(!encontrado){
                res.status(400).json({message:"Id not found"})
            }
            await encontrado.destroy()
            res.status(200).json({message:"Id eliminado"})
            return 

        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
            console.log(error)
        }
    }
}
module.exports= usersControllers