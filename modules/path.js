const path = require("path");

//nome do arquivo
console.log(path.basename(__filename));

//nome do diretorio
console.log(path.dirname(__filename));

//extensão do arquivo
console.log(path.extname(__filename));

//criar um objeto path
console.log(path.parse(__filename));

//juntar caminhos
console.log(path.join(__dirname, "test", "test.html"));
