const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "crud_db",
  connectionLimit: 10,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/list", (req, res) => {
  const sqlSelect = "SELECT * FROM tb_data where data_password=''";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const data_content = req.body.data_content;
  const data_time = req.body.data_time;
  const data_user = req.body.data_user;
  const data_password = req.body.data_password;
  const sqlInsert =
    "INSERT INTO tb_data (data_content, data_time, data_user, data_password) VALUES (?,?,?,?)";

  db.query(
    sqlInsert,
    [data_content, data_time, data_user, data_password],
    (err, result) => {
      res.send(result);
    }
  );
});

app.get("/api/catch/:data_password", (req, res) => {
  const data_password = req.params.data_password;
  const sqlGetwPassword = "SELECT * FROM tb_data WHERE data_password =?";
  db.query(sqlGetwPassword, data_password, (err, rows) => {
    res.send(rows);
  });
});

app.delete("/api/delete/:data_id", (req, res) => {
  const data_id = req.params.data_id;

  const sqlDelete = "DELETE FROM tb_data where data_id=?";
  db.query(sqlDelete, data_id, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.put("/api/update/:data_id", (req, res) => {
  const data_content = req.body.data_content;
  const data_time = req.body.data_time;
  const data_user = req.body.data_user;
  const data_password = req.body.data_password;
  const data_id = req.params.data_id;

  const sqlUpdate =
    "UPDATE tb_data SET data_content= ?, data_time= ?, data_user= ?, data_password=? where data_id=?";

  db.query(
    sqlUpdate,
    [data_content, data_time, data_user, data_password, data_id],
    (err, result) => {
      if (err) console.error(err);
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("Listening 3001 portsasa");
});
