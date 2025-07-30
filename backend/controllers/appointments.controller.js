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
    const result = await pool.query(
      "SELECT a.*, p.name AS pet_name, o.name AS owner_name, u.name AS doctor_name FROM appointments a LEFT JOIN pets p ON a.pet_id = p.id LEFT JOIN owners o ON p.owner_id = o.id LEFT JOIN users u ON a.doctor_id = u.id ORDER BY a.date, a.time"
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching appointment details");
  }
};

// Create an appointment
const createAppointment = async (req, res) => {
  const { pet_id, doctor_id, date, time, notes } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO appointments (pet_id, doctor_id, date, time, status, notes) VALUES ($1, $2, $3, $4, 'pending', $5) RETURNING *`,
      [pet_id, doctor_id, date, time, notes]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating appointment");
  }
};

// Update existing appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { pet_id, doctor_id, date, time, status, notes } = req.body;

  try {
    const result = await pool.query(
      "UPDATE appointments SET pet_id = $1, doctor_id = $2, date = $3, time = $4, status = $5, notes = $6  WHERE id = $7 RETURNING *",
      [pet_id, doctor_id, date, time, status, notes, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error updating appointment");
  }
};

// Update appointment status
const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await pool.query(
      "UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("error updating appointment status");
  }
};

// delete an appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM appointments WHERE id = $1", [id]);
    res.send("appointment deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("error deleting appointment");
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
