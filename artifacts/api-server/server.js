import cors from "cors";
import express from "express";
import connectRoutes from "./routes/connectRoutes.js";

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Os endpoints oficiais são /usuarios. O prefixo /api mantém o acesso
// funcionando quando a aplicação é servida pelo roteamento do ambiente.
app.use(connectRoutes);
app.use("/api", connectRoutes);

app.use((error, _req, res, _next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    res.status(400).json({ erro: "JSON inválido" });
    return;
  }

  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.use((_req, res) => {
  res.status(404).json({ erro: "Endpoint não encontrado" });
});

app.listen(port, () => {
  process.stdout.write(`API Connect funcionando na porta ${port}\n`);
});