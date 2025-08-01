import pool from "../config/db.js";

export const createMedicalRecord = async (req, res) => {
  const { pet_id, doctor_id, diagnosis, notes, items } = req.body;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Insert medical record
    const medicalRecordResult = await client.query(
      `INSERT INTO medical_records (pet_id, doctor_id, diagnosis, notes)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [pet_id, doctor_id, diagnosis, notes]
    );
    const medical_record_id = medicalRecordResult.rows[0].id;

    // Create medical bill
    const billResult = await client.query(
      `INSERT INTO medical_bills (pet_id, doctor_id, total_amount)
       VALUES ($1, $2, 0) RETURNING id`,
      [pet_id, doctor_id]
    );
    const bill_id = billResult.rows[0].id;

    let totalAmount = 0;

    // Insert medical bill items
    for (const item of items) {
      const itemInfo = await client.query(
        `SELECT price FROM item_master WHERE id = $1`,
        [item.item_id]
      );
      const price = itemInfo.rows[0].price;
      const total_price = price * item.quantity;
      totalAmount += total_price;

      await client.query(
        `INSERT INTO medical_bill_items (bill_id, item_id, quantity, price, total_price)
         VALUES ($1, $2, $3, $4, $5)`,
        [bill_id, item.item_id, item.quantity, price, total_price]
      );
    }

    // Update total amount in bill
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

module.exports = {
  createMedicalRecord,
};
