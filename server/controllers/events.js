import EventMessage from '../models/eventMessage.js';

export const getEvents = async (req, res) => {
    try {
        const eventMessages = await EventMessage.find()
        console.log(eventMessages);

        res.status(200).json(eventMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEvent = async (req, res) => {
    const body = req.body;

    const newEvent = new EventMessage(body);

    try {
        await newEvent.save()

        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}