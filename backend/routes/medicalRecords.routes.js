const express = require("express");
const {
  createMedicalRecord,
} = require("../controllers/medicalRecords.controller");

const router = express.Router();

router.post("/", createMedicalRecord);
// router.get("/", getAllOwners);

module.exports = router;
