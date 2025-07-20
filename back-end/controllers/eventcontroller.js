const Event = require('../schemas/Event');
const User = require('../schemas/User');

const createEvent = async (req, res) => {
    const { name, description, date, time, venue} = req.body;
    console.log('Club :', req.user._id);
    clubId=String(req.user._id); // Assuming clubId is available in req.user
    // const { clubId } = req.user._id; // Assuming clubId is available in req.user
    try {
        const event = await Event.create({
            clubId,
            name,
            description,
            date,
            time,
            venue,
            User: []
        });
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const updateEvent = async (req, res) => {
    const { id, name, description, date, time, venue } = req.body;
    try {
        const event = await Event.findByIdAndUpdate(id, {
            name,
            description,
            date,
            time,
            venue
        },{new :true});
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        console.log('Updated Event : ', event);
        
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteEvent = async (req, res) => {
    const { id } = req.body;
    try {
        const event = await Event.findByIdAndRemove(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        console.log('Deleted Event : ', event);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error('Error in deleting : ',error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents
}
