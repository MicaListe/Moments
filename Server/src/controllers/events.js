const axios= require("axios")
const {Evento, Lugar}=require("../db")

const allEvents= async (req,res) => {
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
}

const createEvents = async (req,res)=>{
    try{
        const {name} = req.body

        if(!name){
            return res.status(400).json({message: "Faltan datos"})
        }

        const newEvent = await Event.create({
            name
        })

        res.status(201).json({message:"Evento creado con exito"}, newEvent)

    }catch(error){
        console.error(error)
    }
}

module.exports= allEvents, createEvents
