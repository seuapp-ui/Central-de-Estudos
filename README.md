# Central de Estudos v0.1.6 — Conteúdo + Prática

Sistema de estudo em HTML/CSS/JavaScript para vestibulinho e concursos de prefeitura, baseado no edital informado pelo usuário.

## Novidades 0.1.0 (antes "v4.1")
- Aulas curtas por assunto, antes das questões.
- Exemplos e pegadinhas.
- Flashcards clicáveis.
- Plano de estudo adaptativo.
- Sessão diária com priorização de assuntos.
- Conteúdo específico para Português, Matemática, ACS e Orientador Social.
- Links para fontes oficiais em temas que precisam de atualização.
- Mantidos simulados, revisão inteligente, XP, histórico, metas e PWA.

## Como executar
Abra `index.html` em um servidor local ou publique a pasta no GitHub Pages.

## Correções v0.1.1
- Página **Desempenho** não quebra mais (erro de variável em `statistics()`).
- Alternativas agora são **embaralhadas** (antes a resposta certa era sempre a letra A). A ordem é fixa por questão; o progresso salvo continua válido.
- Removidas 100 questões duplicadas (banco: 200 questões únicas) e corrigidos tópicos/alternativas inconsistentes.
- Simulados e "Refazer" funcionam com questões já respondidas; erros de simulado alimentam a Revisão inteligente.
- Datas (meta diária e sequência) usam o fuso local, não UTC.
- XP só é concedido enquanto a questão ainda não foi acertada (evita farm repetindo a mesma questão).
- Quizzes sem questões não travam mais a tela.
- PWA: service worker completo (inclui `lessons.js`, funciona offline, atualiza sozinho), manifest e ícones.
- Aviso discreto (toast) no lugar de `alert`, e selo "estudado" nas aulas.

## Próximos passos sugeridos
- Mais questões para tópicos com 1–2 itens e aulas para os tópicos do edital ainda sem aula.
- Exportar/importar progresso (hoje fica só no `localStorage`).

## v0.1.2
- Novo `js/extra.js`: 17 aulas e 20 questões para tópicos de ACS e Orientador Social que não tinham cobertura.

## v0.1.3
- Novo `js/extra2.js`: 21 aulas e 22 questões de Português e Matemática.

## v0.1.4
- Botões **Exportar/Importar progresso** (arquivo JSON) no menu lateral.
- `js/extra3.js`: mais 17 questões.

## v0.1.5
- **Revisão espaçada**: questões erradas voltam em 1, 3, 7 e 14 dias (cartão no Dashboard e na Revisão).
- Corrigido: após "Zerar progresso", os dados antigos podiam reaparecer (objetos compartilhados no estado padrão).

## v0.1.6
- **Simulado por tópico** (matéria + tópico + nº de questões) com tempo.
- **Gabarito comentado** ao final de simulados e provas.
- Versionamento renumerado: a antiga "v4.1.5" passa a ser a **0.1.5**.
