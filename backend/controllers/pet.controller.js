const pool = require("../config/db");

// Fetch all pets
const getAllPets = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM pets ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("error fetching pets");
  }
};

// Fetch all pets with owners
const getPetsWithOwner = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT pets.*, owners.name AS owner_name FROM pets JOIN owners ON pets.owner_id = owners.id ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("error fetching pets with owners");
  }
};

// Create an pet
const createPet = async (req, res) => {
  const { name, species, breed, gender, dob, owner_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO pets (name, species, breed, gender, dob, owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, species, breed, gender, dob, owner_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error creating pet");
  }
};

// Update existing pet
const updatePet = async (req, res) => {
  const { id } = req.params;
  const { name, species, breed, gender, dob, owner_id } = req.body;

  try {
    const result = await pool.query(
      "UPDATE pets SET name = $1, species = $2, breed = $3, gender = $4, dob = $5, owner_id = $6 WHERE id = $7 RETURNING *",
      [name, species, breed, gender, dob, owner_id, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error updating pet");
  }
};

// delete an pet
const deletePet = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM pets WHERE id = $1", [id]);
    res.send("pet deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("error deleting pet");
  }
};

module.exports = {
  getAllPets,
  getPetsWithOwner,
  createPet,
  updatePet,
  deletePet,
};
