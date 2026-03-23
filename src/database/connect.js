// src/database/connect.js
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI nao foi definida no arquivo .env');
  }

  try {
    await mongoose.connect(uri, {
      family: 4,
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    if (error.message.includes('bad auth')) {
      throw new Error('Falha de autenticacao no MongoDB. Verifique usuario e senha do Atlas no arquivo .env.');
    }

    if (error.message.includes('querySrv')) {
      throw new Error('Falha ao resolver o endereco SRV do MongoDB. Use uma URI mongodb:// padrao ou verifique o DNS da rede.');
    }

    throw error;
  }

  console.log('Conexao com o banco de dados realizada com sucesso!');
};

module.exports = connectToDatabase;
