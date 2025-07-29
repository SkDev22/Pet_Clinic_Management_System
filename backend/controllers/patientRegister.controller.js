const pool = require("../config/db");

// Register a patient
const registerPatient = async (req, res) => {
  const { owner, pet } = req.body;

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const ownerResults = await client.query(
      "INSERT INTO owners (name, phone, email, address) VALUES ($1, $2, $3, $4) RETURNING *",
      [owner.name, owner.phone, owner.email, owner.address]
    );
    const ownerId = ownerResults.rows[0].ownerId;

    const petResults = await client.query(
      "INSERT INTO pets (name, species, breed, gender, dob, owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [pet.name, pet.species, pet.breed, pet.gender, pet.dob, ownerId]
    );

    await client.query("COMMIT");

    res.json({
      message: "Patient registered successfully",
      owner: ownerResults.rows[0],
      pet: petResults.rows[0],
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Registration error", error);
    res.status(500).send("error registering patient");
  } finally {
    client.release();
  }
};

module.exports = {
  registerPatient,
};
