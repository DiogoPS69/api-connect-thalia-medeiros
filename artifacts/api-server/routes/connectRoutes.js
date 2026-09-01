import { Router } from "express";
import {
  atualizarUsuarioPorId,
  buscarUsuario,
  criarUsuario,
  excluirUsuario,
  listarTodosUsuarios,
} from "../controllers/connectController.js";

const router = Router();

router.post("/usuarios", criarUsuario);
router.get("/usuarios", listarTodosUsuarios);
router.get("/usuarios/:id", buscarUsuario);
router.put("/usuarios/:id", atualizarUsuarioPorId);
router.delete("/usuarios/:id", excluirUsuario);

export default router;