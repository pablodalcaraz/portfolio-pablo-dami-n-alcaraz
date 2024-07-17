import express from "express";
import { sendMail } from "../services/mail.service.js";

const router = express.Router();

router.post("/contacto", (req, res) => {
  const { nombre, email, comentario } = req.body;

  if (!nombre || !email || !comentario) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios"
    });
  }

  const subject = `Nuevo mensaje de ${nombre}`;
  const text = `Mensaje: ${comentario}`;

  sendMail( process.env.EMAIL_USER, subject, text, email);

  res.status(200).json({ success: "Mensaje enviaod con éxito." });
});

export default router;
