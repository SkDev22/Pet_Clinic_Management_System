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
// pet_name, owner_name, doctor_name
const getAppointmentsWithDetails = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT a.*, name AS pet_name, name AS owner_name, name AS doctor_name FROM appointments a JOIN pets p ON a.pet_id = p.id JOIN owners o ON p.owner_id = o.id JOIN users u ON a.doctor_id = u.id ORDER BY a.date, a.time"
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching appointment details");
  }
};

// TODO: ----------------------------------------

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
