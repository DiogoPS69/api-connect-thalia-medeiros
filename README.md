# API Connect

API REST simples para gerenciamento de usuários, desenvolvida para a disciplina de Desenvolvimento Back-End.

O projeto utiliza **Node.js** com **Express** e mantém os dados em memória, sem conexão com banco de dados.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript com módulos ES (`import`/`export`)
- CORS
- JSON
- pnpm Workspaces

## Estrutura do repositório

Os arquivos principais da API estão dentro de `artifacts/api-server/`:

```text
.
├── artifacts/
│   ├── api-server/
│   │   ├── controllers/
│   │   │   └── connectController.js
│   │   ├── data/
│   │   │   └── connectData.js
│   │   ├── routes/
│   │   │   └── connectRoutes.js
│   │   ├── server.js
│   │   ├── build.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── mockup-sandbox/
│       └── ...
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   │   └── openapi.yaml
│   ├── api-zod/
│   └── db/
├── scripts/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── replit.md
```

### Responsabilidade dos arquivos da API

- `artifacts/api-server/server.js`: inicializa o Express, configura JSON e CORS, registra as rotas e inicia o servidor.
- `artifacts/api-server/routes/connectRoutes.js`: define os endpoints REST de usuários.
- `artifacts/api-server/controllers/connectController.js`: contém as regras para criar, listar, buscar, atualizar e excluir usuários.
- `artifacts/api-server/data/connectData.js`: mantém a lista de usuários e as operações de armazenamento em memória.

## Como executar

Na raiz do repositório, instale as dependências:

```bash
pnpm install
```

Inicie a API:

```bash
pnpm --filter @workspace/api-server run dev
```

O servidor utiliza a porta definida pela variável de ambiente `PORT`. Quando essa variável não está definida, a porta padrão é `3000`.

Com o servidor em execução, a API pode ser acessada em:

```text
http://localhost:3000
```

No ambiente gerenciado do projeto, a porta é fornecida automaticamente pelo workflow.

## Endpoints

Todas as respostas são retornadas em formato JSON.

### Criar usuário

```http
POST /usuarios
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "nome": "Maria Silva",
  "email": "maria@example.com"
}
```

Resposta de sucesso: `201 Created`

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@example.com"
}
```

Se `nome` ou `email` não forem informados, a API retorna `400 Bad Request`:

```json
{
  "erro": "nome e email são obrigatórios"
}
```

### Listar usuários

```http
GET /usuarios
```

Resposta de sucesso: `200 OK`

```json
[
  {
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria@example.com"
  }
]
```

### Buscar usuário por ID

```http
GET /usuarios/1
```

Resposta de sucesso: `200 OK`

Se o ID não existir, a API retorna `404 Not Found`:

```json
{
  "erro": "Usuário não encontrado"
}
```

### Atualizar usuário

```http
PUT /usuarios/1
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "nome": "Maria Souza",
  "email": "maria.souza@example.com"
}
```

Resposta de sucesso: `200 OK`

Se o ID não existir, a API retorna `404 Not Found`.

### Excluir usuário

```http
DELETE /usuarios/1
```

Resposta de sucesso: `200 OK`

```json
{
  "mensagem": "Usuário excluído com sucesso",
  "usuario": {
    "id": 1,
    "nome": "Maria Souza",
    "email": "maria.souza@example.com"
  }
}
```

Se o ID não existir, a API retorna `404 Not Found`.

## Observações

- O ID é numérico e gerado automaticamente.
- Os usuários ficam armazenados somente em memória.
- Os dados são perdidos quando o servidor é reiniciado.
- A rota auxiliar `GET /healthz` retorna o status de funcionamento do servidor.
- O servidor também aceita o prefixo interno `/api` quando necessário pelo roteamento do ambiente, por exemplo `/api/usuarios`.