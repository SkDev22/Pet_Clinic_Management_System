const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const ownersRoute = require("./routes/owners.routes");
const petsRoute = require("./routes/pets.routes");
const patientRegisterRoute = require("./routes/patientRegister.routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/owners", ownersRoute);
app.use("/api/pets", petsRoute);
app.use("/api/patientregister", patientRegisterRoute);

app.listen(port, () => {
  console.log(`🤝 Server running on port ${port}`);
});
