const express = require("express");
const {
  registerPatient,
} = require("../controllers/patientRegister.controller");

const router = express.Router();

router.post("/", registerPatient);

module.exports = router;
