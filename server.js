require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/db");

const app = express();
app.use(express.json());

dbConnect();

app.use("/api/v1", require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/languageRoutes"));
app.use("/api/v1", require("./routes/educationRoutes"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
