const {Evento, Lugar}=require("../db")

const eventsControllers={

    allEvents: async (req,res) => {
        try{
            const events= await Evento.findAll({
                include:[
                    {
                        model: Lugar 
                    }
                ]
            })
            res.status(200).json(events)
            
        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
        }
    },

    createEvents: async (req,res)=>{
       
        try{
            const {name} = req.body
            if(!name){
                return res.status(400).json({message: "Faltan datos"})
            }

            const newEvent = await Evento.create({
                name
            })
            res.status(201).json(newEvent)
         

        }catch(error){
            console.error(error)
        }
    },

    deleteEvents: async (req,res)=>{
        try{
            const id = req.params.id
           
            const eliminar = await Evento.findByPk(id)
           
            if(!eliminar){
                res.status(400).json({message:"Id not found"})
            }
            await eliminar.destroy()

            res.status(200).json({message:"Event eliminated"})
            return

        }catch(error){
            console.error(error)
        }
    }
}
module.exports= eventsControllers
