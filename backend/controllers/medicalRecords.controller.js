const pool = require("../config/db.js");

const createMedicalRecord = async (req, res) => {
  const {
    pet_id,
    doctor_id,
    appointment_id = null,
    diagnosis,
    notes,
    items,
  } = req.body;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Insert into medical_records
    const medicalRecordResult = await client.query(
      `INSERT INTO medical_records (pet_id, doctor_id, appointment_id, diagnosis, notes)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [pet_id, doctor_id, appointment_id, diagnosis, notes]
    );
    const medical_record_id = medicalRecordResult.rows[0].id;

    // Create medical_bill and link to medical_record_id
    const billResult = await client.query(
      `INSERT INTO medical_bills (pet_id, doctor_id, total_amount, status, medical_record_id)
       VALUES ($1, $2, 0, $3, $4) RETURNING id`,
      [pet_id, doctor_id, "pending", medical_record_id]
    );
    const bill_id = billResult.rows[0].id;

    let totalAmount = 0;

    for (const item of items) {
      const itemInfo = await client.query(
        `SELECT price FROM item_master WHERE id = $1`,
        [item.item_id]
      );

      if (itemInfo.rows.length === 0) {
        throw new Error(`Item with ID ${item.item_id} not found.`);
      }

      const price = itemInfo.rows[0].price;
      const itemTotal = price * item.quantity;
      totalAmount += itemTotal;

      await client.query(
        `INSERT INTO medical_bill_items (bill_id, item_id, quantity, price)
         VALUES ($1, $2, $3, $4)`,
        [bill_id, item.item_id, item.quantity, price]
      );
    }

    await client.query(
      `UPDATE medical_bills SET total_amount = $1 WHERE id = $2`,
      [totalAmount, bill_id]
    );

    await client.query("COMMIT");
    res.status(201).json({
      message: "Medical record and bill created successfully",
      medical_record_id,
      bill_id,
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error creating medical record:", err);
    res.status(500).json({ error: "Failed to create medical record" });
  } finally {
    client.release();
  }
};

// Get all medical records
const getMedicalRecords = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT mr.*, p.name as pet_name FROM medical_records mr LEFT JOIN pets p ON mr.pet_id = p.id ORDER BY mr.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching medical records:", err);
    res.status(500).json({ error: "Failed to fetch medical records" });
  }
};

module.exports = {
  createMedicalRecord,
  getMedicalRecords,
};
