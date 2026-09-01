const usuarios = [];
let proximoId = 1;

export function listarUsuarios() {
  return usuarios;
}

export function buscarUsuarioPorId(id) {
  return usuarios.find((usuario) => usuario.id === id);
}

export function adicionarUsuario(nome, email) {
  const usuario = { id: proximoId, nome, email };
  proximoId += 1;
  usuarios.push(usuario);
  return usuario;
}

export function atualizarUsuario(id, dados) {
  const usuario = buscarUsuarioPorId(id);

  if (!usuario) {
    return undefined;
  }

  if (dados.nome !== undefined) {
    usuario.nome = dados.nome;
  }

  if (dados.email !== undefined) {
    usuario.email = dados.email;
  }

  return usuario;
}

export function removerUsuario(id) {
  const indice = usuarios.findIndex((usuario) => usuario.id === id);

  if (indice === -1) {
    return undefined;
  }

  const [usuario] = usuarios.splice(indice, 1);
  return usuario;
}