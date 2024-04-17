const {Decoration}=require("../db")

const decorationControllers={

    allDecoration: async (req, res) => {
        try{
            const decorations= await Decoration.findAll()
            res.status(200).json(decorations)
        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
        }
    },
    createDecoration: async (req, res) => {
        try{
            const {description, image}=req.body
            if(!description, !image){
                res.status(400).json({message:"Faltan datos"})
            }

            const newDecoration= Decoration.create({
                description,
                image
            })
            res.status(201).json(newDecoration)

        }catch(error){
            console.error(error)
        }
    },
    deleteDecoration: async (req, res) => {
        try{
            const id= req.params.id 

            const eliminar= await Decoration.findByPk(id)

            if(!eliminar){
                res.status(400).json({message:"Id not found"})
            }
            await eliminar.destroy()

            res.status(200).json({message:"Decoration eliminated"})
            return

        }catch(error){
            console.error(error)
        }
    },
    updateDecoration: async (req, res) => {
        try{
            const id=req.params.id

            const buscar= await Decoration.findByPk(id)

            if(!buscar){
                res.status(400).json({message:"Id not found"})
            }
            await buscar.update()

            res.status(200).json({message:"Decoration update"})
            return

        }catch(error){
            res.status(500).json({error:"Error del servidor"}) 
            console.error(error)
        }

    }
}

module.exports=decorationControllers