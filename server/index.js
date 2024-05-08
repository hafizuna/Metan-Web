const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());

app.post("/home", (req, res) => {
  const { name, phone, inputValue, service, plate } = req.body;

  console.log({ name, phone, inputValue, service, plate });
  //   res.sendStatus(200);
  res.json({ name, phone, inputValue, service, plate });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
