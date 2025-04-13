const express = require("express");
const bodyParser = require("body-parser");

const generalRoutes = require("./routes/general");
const registeredRoutes = require("./routes/registered");

const app = express();
app.use(bodyParser.json());

app.use("/", generalRoutes);
app.use("/auth", registeredRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
