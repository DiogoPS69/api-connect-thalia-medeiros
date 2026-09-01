import {
  adicionarUsuario,
  atualizarUsuario,
  buscarUsuarioPorId,
  listarUsuarios,
  removerUsuario,
} from "../data/connectData.js";

function idDaRequisicao(valor) {
  const id = Number(valor);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export function criarUsuario(req, res) {
  const { nome, email } = req.body ?? {};

  if (nome === undefined || nome === null || nome === "" ||
      email === undefined || email === null || email === "") {
    res.status(400).json({
      erro: "nome e email são obrigatórios",
    });
    return;
  }

  const usuario = adicionarUsuario(nome, email);
  res.status(201).json(usuario);
}

export function listarTodosUsuarios(_req, res) {
  res.status(200).json(listarUsuarios());
}

export function buscarUsuario(req, res) {
  const id = idDaRequisicao(req.params.id);
  const usuario = id === null ? undefined : buscarUsuarioPorId(id);

  if (!usuario) {
    res.status(404).json({
      erro: "Usuário não encontrado",
    });
    return;
  }

  res.status(200).json(usuario);
}

export function atualizarUsuarioPorId(req, res) {
  const id = idDaRequisicao(req.params.id);
  const usuario = id === null
    ? undefined
    : atualizarUsuario(id, req.body ?? {});

  if (!usuario) {
    res.status(404).json({
      erro: "Usuário não encontrado",
    });
    return;
  }

  res.status(200).json(usuario);
}

export function excluirUsuario(req, res) {
  const id = idDaRequisicao(req.params.id);
  const usuario = id === null ? undefined : removerUsuario(id);

  if (!usuario) {
    res.status(404).json({
      erro: "Usuário não encontrado",
    });
    return;
  }

  res.status(200).json({
    mensagem: "Usuário excluído com sucesso",
    usuario,
  });
}