const express = require("express");
const {
  getAllAppointments,
  getAppointmentsWithDetails,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  updateAppointmentStatus,
} = require("../controllers/appointments.controller");

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/appointmentdetails", getAppointmentsWithDetails);
router.post("/", createAppointment);
router.put("/update/:id", updateAppointment);
router.patch("/update/:id/status", updateAppointmentStatus);
router.delete("/delete/:id", deleteAppointment);

module.exports = router;
