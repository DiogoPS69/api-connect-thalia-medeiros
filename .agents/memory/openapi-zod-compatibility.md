---
name: OpenAPI e Zod
description: Compatibilidade entre o gerador Orval do workspace e a versão Zod usada pelos schemas compartilhados.
---

O gerador OpenAPI deste workspace pode emitir validadores Zod v4 em formato incompatível com a versão Zod v3 instalada. Formatos `uuid` e `email` e tipos `integer` são especialmente sensíveis; padrões explícitos e `number` mantêm o código gerado compilável.

**Why:** Os arquivos gerados de API e tipos são reexportados pelo mesmo barrel, então schemas de request com nomes iguais aos componentes OpenAPI também podem gerar conflitos de exportação.

**How to apply:** Ao alterar o contrato, prefira `pattern` para formatos quando a validação gerar código Zod, use `number` quando `integer` não for essencial e dê aos componentes nomes distintos dos nomes de operação gerados. Sempre execute o codegen e o typecheck das libs depois de mudar o contrato.