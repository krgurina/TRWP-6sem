const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/A.html");
});

app.post("/sum", (req, res) => {
  const x = parseInt(req.headers["x-value-x"]);
  const y = parseInt(req.headers["x-value-y"]);

  const z = x + y;

  res.setHeader("X-Value-z", z.toString());
  res.send("Результат: " + z);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
