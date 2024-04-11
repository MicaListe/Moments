const {Router}= require("express")
const eventsControllers = require("../controllers/events")

const router= Router()


//LLAMAR EN POSTMAN EVENTS/CREATE_EVENTS
router.post("/create_events", eventsControllers.createEvents)
router.get("/events", eventsControllers.allEvents)
router.delete("/delete_event", eventsControllers.deleteEvents)

module.exports= router