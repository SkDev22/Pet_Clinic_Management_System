const express = require("express");
const {
  createMedicalRecord,
  getMedicalRecords,
} = require("../controllers/medicalRecords.controller");

const router = express.Router();

router.post("/", createMedicalRecord);
router.get("/", getMedicalRecords);

module.exports = router;
