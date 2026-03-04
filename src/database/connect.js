const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    // TENTA conectar no banco...
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.jzha1s6.mongodb.net/?appName=cursoNODEJS`
    );
    // Se der certo, avisa no terminal:
    console.log("Conexão com o banco de dados realizada com sucesso! 🎉");
    
  } catch (error) {
 
    console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;