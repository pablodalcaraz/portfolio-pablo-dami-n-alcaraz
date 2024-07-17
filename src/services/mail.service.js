import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendMail = (to, subject, text, replyTo) => {
  console.log(`Enviando correo a ${to}, desde ${process.env.EMAIL_USER}`)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
    replyTo: replyTo
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};


