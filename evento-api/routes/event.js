// event.js (arquivo de rotas para eventos)
const express = require('express');
const eventController = require('../controllers/eventController'); // Certifique-se de que o caminho está correto
const router = express.Router();

// Rota para criar um evento
router.post('/', eventController.createEvent);

// Rota para listar todos os eventos
router.get('/', eventController.getEvents);

module.exports = router;
