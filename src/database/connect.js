const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Conexão com o banco de dados realizada com sucesso! 🎉');
  } catch (error) {
    console.log('Erro ao conectar:', error);
  }
};

module.exports = connectToDatabase;
 