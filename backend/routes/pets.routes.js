const express = require("express");
const {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  getPetsWithOwner,
} = require("../controllers/pet.controller");

const router = express.Router();

router.get("/", getAllPets);
router.get("/withOwner", getPetsWithOwner);
router.post("/", createPet);
router.put("/update/:id", updatePet);
router.delete("/delete/:id", deletePet);

module.exports = router;
