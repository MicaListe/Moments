const {Evento, Lugar}= require("../db")

const lugarControllers={

    allPlaces: async(req,res)=>{
        try{
            const places= await Lugar.findAll({
                include:[{
                    model: Evento
                }]
            })
            res.status(200).json(places)

        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
            console.error(error)
        }
    },

    createPlaces: async(req,res)=>{
        try{
            const {name, city, country, type, image, description, event}= req.body

            if(!name || !city || !image || !description || !country || !type || !event){
                res.status(400).json({message:"Faltan datos"})
            }

            const newPlace= await Lugar.create({
                name,
                city,
                type,
                country,
                image,
                description,
                event
            })
            
            const eventModels= await Evento.findAll({
                where:{
                    name:event
                },
                include:{
                    attributes:["name"],
                    model:Lugar,
                    through:{
                        attributes:[]
                    }
                }
            })
            await newPlace.addEventos(eventModels)
            res.status(200).json({message:"Lugar creado exitosamente", newPlace})

        }catch(error){
            res.status(500).json({error:"Error interno del servidor"})
            console.error(error)
        }
    },

    deletePlace: async(req,res)=>{
        try{

            const id = req.params.id
            const eliminar= await Lugar.findByPk(id)

            if(!eliminar){
                res.status(400).json({message:"Id not found"})
            }

            await eliminar.destroy()
            res.status(200).json({message:"Place eliminated"})
            return 

        }catch(error){
            res.status(500).json({message:"Error interno del servidor"})
            console.error(error)
        }
    },
    updatePlaces: async (req,res)=>{
        try{
            const id= req.params.id
            const body=req.body
            console.log(id,"id")

            const modificar= await Lugar.findByPk(id)

            if(!modificar){
                res.status(400).json({message:"Id not found"})
            }

            const resultadoActualizado=await modificar.update(body)
            
            res.status(200).json({message:"Place modificado"})
            return resultadoActualizado

        }catch(error){
            res.status(500).json({message:"Error interno del servidor"})
            console.error(error)
        }
    }
}
module.exports= lugarControllers