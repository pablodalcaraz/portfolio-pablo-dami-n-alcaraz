import nodemailer from 'nodemailer';


export async function handler(event, context) {
  const { nombre, email, comentario } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nuevo comentario de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nComentario: ${comentario}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado exitosamente!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo.' })
    };
  }
}