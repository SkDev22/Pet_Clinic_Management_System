const express = require("express");
const {
  getAllOwners,
  createOwner,
  updateOwner,
  deleteOwner,
} = require("../controllers/owner.controller");

const router = express.Router();

router.get("/", getAllOwners);
router.post("/", createOwner);
router.put("/update/:id", updateOwner);
router.delete("/delete/:id", deleteOwner);

module.exports = router;
