// controllers/eventController.js
const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const event = await Event.create({ title, description, date });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar evento' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos' });
  }
};
