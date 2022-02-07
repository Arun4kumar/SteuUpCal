const express = require("express");
const bodyParser = require("body-parser");
const constants = require("./constants/serverConstants.json");
const sipRoutes = require("./routes/tasks");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/calculate", sipRoutes);

app.all("*", (req, res) => {
  res.status(404).send({ error: "not found" });
});

app.listen(constants.port, () => {
  console.log("listening on port 3000");
});
