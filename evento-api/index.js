const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');  // Rotas de autenticação
const eventRoutes = require('./routes/event');  // Rotas de eventos

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',  // Frontend permitido
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas de eventos
app.use('/api/events', eventRoutes);



// Sincronização do banco de dados e inicialização do servidor
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
