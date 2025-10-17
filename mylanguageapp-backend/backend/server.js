const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

let pdfParse = require("pdf-parse");

// fallback: se não vier como função, pega o .default
if (typeof pdfParse !== "function" && pdfParse.default) {
  pdfParse = pdfParse.default;
}

console.log("pdfParse importado como:", typeof pdfParse);

const app = express();
app.use(cors());
const upload = multer({ dest: "uploads/" });

// Rota de teste
app.get("/", (req, res) => {
  res.send("✅ API rodando! Use POST /upload para enviar PDFs.");
});

// Rota de upload
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log("Arquivo recebido:", req.file);

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    // Apaga o arquivo temporário depois de processar
    fs.unlinkSync(req.file.path);
  } catch (err) {
    console.error("Erro ao processar PDF:", err);
    res
      .status(500)
      .json({ error: "Erro ao processar PDF", details: err.message });
  }
});

// Escuta em todas as interfaces (necessário para celular acessar)
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Servidor rodando em http://0.0.0.0:3000");
});
