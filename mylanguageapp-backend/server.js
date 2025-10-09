const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const app = express();
app.use(fileUpload());

// Endpoint para upload de PDF
app.post("/upload", async (req, res) => {
  if (!req.files || !req.files.pdf) {
    return res.status(400).send("Nenhum PDF enviado");
  }

  try {
    const data = await pdfParse(req.files.pdf.data);
    res.json({ text: data.text });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao processar PDF");
  }
});

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));
