import express from "express";
import axios from "axios";

const app = express();

// Middleware para procesar datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para procesar el formulario
app.post("/procesar-formulario", async (req, res) => {
  const token = req.body["cf-turnstile-response"]; // Token de Turnstile
  const isValid = await validateTurnstile(token); // Validar el token

  if (isValid) {
    res.send("CAPTCHA válido. Formulario procesado.");
  } else {
    res.status(400).send("CAPTCHA inválido.");
  }
});

// Función para validar el token de Turnstile
async function validateTurnstile(token) {
  const secretKey = "0x4AAAAAABCNmO4wouWL6v9PV7kQSPNvINE"; // Reemplaza con tu Secret Key
  const response = await axios.post(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      secret: secretKey,
      response: token,
    }
  );
  return response.data.success;
}

// Iniciar el servidor
app.listen(3000, () => {
  console.log("🚀🚀 Servidor escuchando en http://localhost:3000 🚀🚀");
});