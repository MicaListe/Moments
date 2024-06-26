const {Catering}=require("./../db")

const cateringControllers={

    allCatering: async (req, res) => {
        try{
            const caterings= await Catering.findAll()
            res.status(200).json(caterings)
        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})

        }
    },
    cateringById:async (req, res) => {
        try{
            const id=req.params.id
            const idEncontrado= await Catering.findByPk(id)

            if(!idEncontrado){
                res.status(404).json({message:"Id not found"})
            }
            res.status(200).json(idEncontrado)

        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
        }
    }
    ,
    createCatering: async(req, res) => {
        try{
            const {name, description, image, type}= req.body
             if(!name || !description || !type || !image){
                return res.status(400).json({message: "Faltan datos"})
             }

             const newCatering=await Catering.create({
                name,
                description,
                type,
                image
             })
             res.status(201).json(newCatering)

        }catch(error){
            console.error(error)
        }
    },
    deleteCatering: async (req, res) => {
        try{

            const id= req.params.id 

            const eliminar= await Catering.findByPk(id)

            if(!eliminar){
                res.status(400).json({message:"Id not found"})
            }
            await eliminar.destroy()

            res.status(200).json({message:"Catering eliminated"})
            return
        }catch(error){
            console.error(error)
        }
    },
    updateCatering: async (req, res) => {
        try{
            const id=req.params.id
            const body=req.body

            const buscar= await Catering.findByPk(id)

            if(!buscar){
                res.status(400).json({message:"Id not found"})
            }

            const resultadoActualizado= await buscar.update(body)
            
            res.status(200).json({message:"Catering update"})
            return resultadoActualizado

        }catch(error){
           
            res.status(500).json({error:"Error del servidor"}) 
            console.error(error)
        }
    }
}

module.exports=cateringControllers