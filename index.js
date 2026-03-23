const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');
const routes = require('./src/routes/routes');

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

const startServer = async () => {
  try {
    await connectToDatabase();
    console.log('Banco conectado');
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao conectar no banco:', error.message);
    process.exit(1);
  }
};

startServer();
