const pool = require("../config/db");

// Fetch all appointments
const getAllAppointments = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM appointments ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("error fetching appintments");
  }
};

// Fetch all appointments with details
const getAppointmentsWithDetails = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM owners ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("error fetching owners");
  }
};

// Create an appointment
const createAppointment = async (req, res) => {
  const { name, phone, email, address } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO owners (name, phone, email, address) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phone, email, address]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error creating owner");
  }
};

// Update existing appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, address } = req.body;

  try {
    const result = await pool.query(
      "UPDATE owners SET name = $1, phone = $2, email = $3, address = $4 WHERE id = $5 RETURNING *",
      [name, phone, email, address, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error updating owner");
  }
};

// Update appointment status
const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, address } = req.body;

  try {
    const result = await pool.query(
      "UPDATE owners SET name = $1, phone = $2, email = $3, address = $4 WHERE id = $5 RETURNING *",
      [name, phone, email, address, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error updating owner");
  }
};

// delete an appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM owners WHERE id = $1", [id]);
    res.send("owner deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("error deleting owner");
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentsWithDetails,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
};
