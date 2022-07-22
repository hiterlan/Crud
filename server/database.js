async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:admin123@localhost:3306/CRUD"
  );
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

connect();

async function insertData() {
  const conn = await connect();
  await conn.query(
    "INSERT INTO tb_data (data_content, data_user) VALUES ('Usando Banco de Dados PRA KRL', 'Hiterlan')"
  );
  return "Inserido com sucesso";
}

module.exports = { insertData };
