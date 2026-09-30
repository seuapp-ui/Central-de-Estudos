const QUESTIONS = [
  {
    "id": 1,
    "subject": "Português",
    "topic": "Ortografia",
    "difficulty": "Fácil",
    "q": "Qual grafia está correta?",
    "a": [
      "exceção",
      "excessão",
      "esceção",
      "excessãoo"
    ],
    "correct": 0,
    "explain": "A forma correta é “exceção”."
  },
  {
    "id": 2,
    "subject": "Português",
    "topic": "Ortografia",
    "difficulty": "Fácil",
    "q": "Assinale a palavra escrita corretamente.",
    "a": [
      "privilégio",
      "previlégio",
      "privilêgio",
      "previlêgio"
    ],
    "correct": 0,
    "explain": "A grafia correta é “privilégio”."
  },
  {
    "id": 3,
    "subject": "Português",
    "topic": "Ortografia",
    "difficulty": "Fácil",
    "q": "Qual opção apresenta grafia correta?",
    "a": [
      "analisar",
      "analizar",
      "anallisar",
      "analyzar"
    ],
    "correct": 0,
    "explain": "O verbo é escrito com s: analisar."
  },
  {
    "id": 4,
    "subject": "Português",
    "topic": "Ortografia",
    "difficulty": "Fácil",
    "q": "Qual palavra está corretamente grafada?",
    "a": [
      "necessário",
      "nescessário",
      "necesário",
      "nessessário"
    ],
    "correct": 0,
    "explain": "“Necessário” é a grafia correta."
  },
  {
    "id": 5,
    "subject": "Português",
    "topic": "Acentuação gráfica",
    "difficulty": "Fácil",
    "q": "Qual palavra deve receber acento?",
    "a": [
      "tambem",
      "mesa",
      "casa",
      "festa"
    ],
    "correct": 0,
    "explain": "“Também” é oxítona terminada em -em e recebe acento."
  },
  {
    "id": 6,
    "subject": "Português",
    "topic": "Acentuação gráfica",
    "difficulty": "Fácil",
    "q": "Qual alternativa está corretamente acentuada?",
    "a": [
      "público",
      "publico",
      "públíco",
      "publíco"
    ],
    "correct": 0,
    "explain": "“Público” é proparoxítona e toda proparoxítona é acentuada."
  },
  {
    "id": 7,
    "subject": "Português",
    "topic": "Acentuação gráfica",
    "difficulty": "Médio",
    "q": "A palavra “saúde” recebe acento porque apresenta?",
    "a": [
      "hiato",
      "ditongo crescente",
      "tritongo",
      "monossílabo tônico"
    ],
    "correct": 0,
    "explain": "O acento marca o hiato em sa-ú-de."
  },
  {
    "id": 8,
    "subject": "Português",
    "topic": "Acentuação gráfica",
    "difficulty": "Médio",
    "q": "Qual palavra é oxítona e corretamente acentuada?",
    "a": [
      "café",
      "árvore",
      "lâmpada",
      "fácil"
    ],
    "correct": 0,
    "explain": "“Café” é oxítona terminada em vogal e recebe acento."
  },
  {
    "id": 9,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Fácil",
    "q": "Qual sinal é mais adequado para separar itens de uma enumeração?",
    "a": [
      "vírgula",
      "ponto de interrogação",
      "dois-pontos obrigatoriamente",
      "aspas"
    ],
    "correct": 0,
    "explain": "A vírgula pode separar elementos de uma enumeração."
  },
  {
    "id": 10,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Médio",
    "q": "Em “Maria, venha aqui”, a vírgula indica?",
    "a": [
      "vocativo",
      "aposto",
      "sujeito",
      "objeto direto"
    ],
    "correct": 0,
    "explain": "“Maria” é vocativo, pois indica a pessoa chamada."
  },
  {
    "id": 11,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Médio",
    "q": "Em “Estudei muito; portanto, fui bem”, o ponto e vírgula ajuda a separar?",
    "a": [
      "orações relacionadas e relativamente independentes",
      "palavras de uma mesma expressão",
      "sujeito e verbo",
      "artigo e substantivo"
    ],
    "correct": 0,
    "explain": "O ponto e vírgula pode separar orações coordenadas de maior extensão."
  },
  {
    "id": 12,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Fácil",
    "q": "Na frase “O aluno estudou”, a palavra “O” é?",
    "a": [
      "artigo",
      "pronome",
      "preposição",
      "advérbio"
    ],
    "correct": 0,
    "explain": "“O” acompanha o substantivo “aluno”, funcionando como artigo definido."
  },
  {
    "id": 13,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Fácil",
    "q": "Na frase “Ela estudou”, “Ela” é?",
    "a": [
      "pronome",
      "artigo",
      "preposição",
      "conjunção"
    ],
    "correct": 0,
    "explain": "“Ela” é pronome pessoal do caso reto."
  },
  {
    "id": 14,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Fácil",
    "q": "Na frase “Estudamos bastante”, “estudamos” é?",
    "a": [
      "verbo",
      "substantivo",
      "adjetivo",
      "preposição"
    ],
    "correct": 0,
    "explain": "“Estudamos” indica ação e está flexionado como verbo."
  },
  {
    "id": 15,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Fácil",
    "q": "Em “Estudo para a prova”, “para” é?",
    "a": [
      "preposição",
      "artigo",
      "pronome",
      "verbo"
    ],
    "correct": 0,
    "explain": "“Para” estabelece relação entre termos e é preposição."
  },
  {
    "id": 16,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Fácil",
    "q": "Em “Estudei, mas errei”, “mas” é?",
    "a": [
      "conjunção",
      "preposição",
      "artigo",
      "substantivo"
    ],
    "correct": 0,
    "explain": "“Mas” é conjunção coordenativa adversativa."
  },
  {
    "id": 17,
    "subject": "Português",
    "topic": "Flexão nominal",
    "difficulty": "Médio",
    "q": "Qual é o plural de “cidadão” apresentado corretamente?",
    "a": [
      "cidadãos",
      "cidadões",
      "cidadães",
      "cidadãoses"
    ],
    "correct": 0,
    "explain": "O plural mais comum e padrão é “cidadãos”."
  },
  {
    "id": 18,
    "subject": "Português",
    "topic": "Flexão nominal",
    "difficulty": "Fácil",
    "q": "Qual alternativa apresenta gênero e número corretamente?",
    "a": [
      "meninas estudiosas",
      "menina estudiosos",
      "meninas estudiosa",
      "menino estudiosas"
    ],
    "correct": 0,
    "explain": "“Meninas estudiosas” apresenta concordância nominal correta."
  },
  {
    "id": 19,
    "subject": "Português",
    "topic": "Concordância nominal",
    "difficulty": "Fácil",
    "q": "Assinale a frase correta.",
    "a": [
      "As questões estão difíceis.",
      "As questões está difíceis.",
      "As questões estão difícil.",
      "As questão estão difíceis."
    ],
    "correct": 0,
    "explain": "O artigo, substantivo, verbo e adjetivo concordam adequadamente."
  },
  {
    "id": 20,
    "subject": "Português",
    "topic": "Concordância nominal",
    "difficulty": "Médio",
    "q": "Complete: “É proibida ___ entrada.”",
    "a": [
      "a",
      "o",
      "um",
      "uma"
    ],
    "correct": 0,
    "explain": "Com substantivo determinado pelo artigo “a”, usa-se “proibida”."
  },
  {
    "id": 21,
    "subject": "Português",
    "topic": "Flexão verbal",
    "difficulty": "Fácil",
    "q": "Em “Nós estudaremos amanhã”, o verbo está em qual tempo?",
    "a": [
      "futuro do presente",
      "pretérito perfeito",
      "presente",
      "pretérito imperfeito"
    ],
    "correct": 0,
    "explain": "“Estudaremos” indica ação futura."
  },
  {
    "id": 22,
    "subject": "Português",
    "topic": "Flexão verbal",
    "difficulty": "Fácil",
    "q": "Em “Eles estudavam”, o verbo está no?",
    "a": [
      "pretérito imperfeito",
      "presente",
      "futuro do presente",
      "pretérito perfeito"
    ],
    "correct": 0,
    "explain": "“Estudavam” expressa ação habitual ou em curso no passado."
  },
  {
    "id": 23,
    "subject": "Português",
    "topic": "Flexão verbal",
    "difficulty": "Fácil",
    "q": "Qual forma está na 1ª pessoa do plural?",
    "a": [
      "estudamos",
      "estuda",
      "estudam",
      "estudas"
    ],
    "correct": 0,
    "explain": "“Estudamos” corresponde a nós."
  },
  {
    "id": 24,
    "subject": "Português",
    "topic": "Concordância verbal",
    "difficulty": "Fácil",
    "q": "Assinale a frase correta quanto à concordância verbal.",
    "a": [
      "Os alunos estudam.",
      "Os alunos estuda.",
      "Os aluno estudam.",
      "Os alunos estudar."
    ],
    "correct": 0,
    "explain": "O verbo concorda com o sujeito plural “os alunos”."
  },
  {
    "id": 25,
    "subject": "Português",
    "topic": "Concordância verbal",
    "difficulty": "Médio",
    "q": "Complete: “A maioria dos candidatos ___ cedo.”",
    "a": [
      "chegou",
      "chegaram obrigatoriamente",
      "chegasse",
      "chegando"
    ],
    "correct": 0,
    "explain": "Com núcleo “maioria”, o singular é uma construção plenamente adequada."
  },
  {
    "id": 26,
    "subject": "Português",
    "topic": "Formação de palavras",
    "difficulty": "Difícil",
    "q": "A palavra “infelizmente” resulta principalmente de?",
    "a": [
      "derivação prefixal e sufixal",
      "composição por justaposição",
      "abreviação",
      "sigla"
    ],
    "correct": 0,
    "explain": "Há prefixo “in-” e sufixo “-mente” associados à base."
  },
  {
    "id": 27,
    "subject": "Português",
    "topic": "Formação de palavras",
    "difficulty": "Médio",
    "q": "“Guarda-chuva” é exemplo de?",
    "a": [
      "composição por justaposição",
      "derivação regressiva",
      "derivação imprópria",
      "sigla"
    ],
    "correct": 0,
    "explain": "Duas palavras se unem sem alteração fonética relevante: guarda-chuva."
  },
  {
    "id": 28,
    "subject": "Português",
    "topic": "Estrutura da oração",
    "difficulty": "Fácil",
    "q": "Em “O candidato resolveu a questão”, o sujeito é?",
    "a": [
      "O candidato",
      "resolveu",
      "a questão",
      "candidato resolveu"
    ],
    "correct": 0,
    "explain": "“O candidato” pratica a ação expressa pelo verbo."
  },
  {
    "id": 29,
    "subject": "Português",
    "topic": "Estrutura da oração",
    "difficulty": "Médio",
    "q": "Em “O candidato resolveu a questão”, “a questão” é?",
    "a": [
      "objeto direto",
      "sujeito",
      "predicativo do sujeito",
      "adjunto adverbial"
    ],
    "correct": 0,
    "explain": "O verbo “resolver” é transitivo direto nesse contexto."
  },
  {
    "id": 30,
    "subject": "Português",
    "topic": "Coordenação e subordinação",
    "difficulty": "Difícil",
    "q": "Em “Estudei porque queria passar”, a oração iniciada por “porque” é?",
    "a": [
      "subordinada adverbial causal",
      "coordenada sindética adversativa",
      "subordinada substantiva subjetiva",
      "coordenada conclusiva"
    ],
    "correct": 0,
    "explain": "“Porque” introduz a causa do estudo."
  },
  {
    "id": 31,
    "subject": "Português",
    "topic": "Coordenação e subordinação",
    "difficulty": "Médio",
    "q": "Em “Estude e revise”, as orações são?",
    "a": [
      "coordenadas",
      "subordinadas substantivas",
      "subordinadas adjetivas",
      "subordinadas adverbiais"
    ],
    "correct": 0,
    "explain": "Cada oração mantém estrutura sintática independente, ligadas por coordenação."
  },
  {
    "id": 32,
    "subject": "Português",
    "topic": "Regência nominal e verbal",
    "difficulty": "Difícil",
    "q": "Assinale a construção adequada à norma-padrão.",
    "a": [
      "Assisti ao filme.",
      "Assisti o filme.",
      "Assisti no filme.",
      "Assisti pelo filme."
    ],
    "correct": 0,
    "explain": "No sentido de ver, “assistir” rege a preposição “a” na norma-padrão."
  },
  {
    "id": 33,
    "subject": "Português",
    "topic": "Regência nominal e verbal",
    "difficulty": "Difícil",
    "q": "Complete: “Ele é favorável ___ proposta.”",
    "a": [
      "à",
      "a",
      "da",
      "pela"
    ],
    "correct": 0,
    "explain": "“Favorável” rege a preposição “a”; com “a proposta”, ocorre crase: à."
  },
  {
    "id": 34,
    "subject": "Português",
    "topic": "Colocação pronominal",
    "difficulty": "Médio",
    "q": "Qual colocação está adequada?",
    "a": [
      "Não me esqueça.",
      "Não esqueça-me.",
      "Não esqueça me.",
      "Me não esqueça."
    ],
    "correct": 0,
    "explain": "A palavra negativa “não” atrai o pronome para antes do verbo."
  },
  {
    "id": 35,
    "subject": "Português",
    "topic": "Colocação pronominal",
    "difficulty": "Difícil",
    "q": "Em início de oração, na norma-padrão, prefere-se?",
    "a": [
      "“Entregaram-me o documento.”",
      "“Me entregaram o documento.” sempre",
      "“Me o entregaram.”",
      "“Entregaram o me documento.”"
    ],
    "correct": 0,
    "explain": "A ênclise é tradicionalmente preferida no início de oração na norma-padrão formal."
  },
  {
    "id": 36,
    "subject": "Português",
    "topic": "Sinonímia",
    "difficulty": "Fácil",
    "q": "Qual é sinônimo adequado de “rápido”?",
    "a": [
      "veloz",
      "lento",
      "tardio",
      "demorado"
    ],
    "correct": 0,
    "explain": "“Veloz” pode significar rápido."
  },
  {
    "id": 37,
    "subject": "Português",
    "topic": "Antônimos",
    "difficulty": "Fácil",
    "q": "Qual é antônimo de “amplo”?",
    "a": [
      "restrito",
      "extenso",
      "vasto",
      "abrangente"
    ],
    "correct": 0,
    "explain": "“Restrito” apresenta sentido contrário a “amplo”."
  },
  {
    "id": 38,
    "subject": "Português",
    "topic": "Polissemia",
    "difficulty": "Médio",
    "q": "A polissemia ocorre quando?",
    "a": [
      "uma palavra possui diferentes sentidos relacionados ao contexto",
      "duas palavras têm sempre o mesmo sentido",
      "uma palavra não possui significado",
      "há erro de ortografia"
    ],
    "correct": 0,
    "explain": "A polissemia é a possibilidade de uma mesma palavra apresentar sentidos diferentes conforme o uso."
  },
  {
    "id": 39,
    "subject": "Português",
    "topic": "Denotação e conotação",
    "difficulty": "Fácil",
    "q": "Em “Ele tem um coração de pedra”, predomina?",
    "a": [
      "conotação",
      "denotação literal",
      "linguagem técnica",
      "linguagem matemática"
    ],
    "correct": 0,
    "explain": "“Coração de pedra” é usado figuradamente para indicar insensibilidade."
  },
  {
    "id": 40,
    "subject": "Português",
    "topic": "Denotação e conotação",
    "difficulty": "Fácil",
    "q": "Em “A água ferveu a 100 °C ao nível do mar”, predomina?",
    "a": [
      "denotação",
      "conotação",
      "ironia",
      "metáfora"
    ],
    "correct": 0,
    "explain": "A frase apresenta sentido literal e informativo."
  },
  {
    "id": 41,
    "subject": "Português",
    "topic": "Recursos linguísticos",
    "difficulty": "Médio",
    "q": "“Seus olhos eram estrelas” é exemplo de?",
    "a": [
      "metáfora",
      "hipérbole",
      "antítese",
      "eufemismo"
    ],
    "correct": 0,
    "explain": "Há comparação implícita entre olhos e estrelas, característica da metáfora."
  },
  {
    "id": 42,
    "subject": "Português",
    "topic": "Recursos linguísticos",
    "difficulty": "Fácil",
    "q": "“Estou morrendo de fome” é exemplo de?",
    "a": [
      "hipérbole",
      "metonímia",
      "pleonasmo",
      "personificação"
    ],
    "correct": 0,
    "explain": "Há exagero intencional para intensificar a ideia de fome."
  },
  {
    "id": 43,
    "subject": "Português",
    "topic": "Interpretação de textos",
    "difficulty": "Fácil",
    "q": "Ao interpretar um texto, a inferência é?",
    "a": [
      "uma conclusão obtida a partir de informações e pistas do texto",
      "uma cópia literal de qualquer frase",
      "uma opinião sem relação com o texto",
      "uma correção ortográfica"
    ],
    "correct": 0,
    "explain": "Inferir é concluir algo com base nas informações disponíveis."
  },
  {
    "id": 44,
    "subject": "Português",
    "topic": "Interpretação de textos",
    "difficulty": "Fácil",
    "q": "A ideia principal de um texto é?",
    "a": [
      "a informação central que organiza seu sentido",
      "sempre a primeira frase",
      "sempre o título",
      "qualquer detalhe secundário"
    ],
    "correct": 0,
    "explain": "A ideia principal sintetiza o núcleo temático do texto."
  },
  {
    "id": 45,
    "subject": "Português",
    "topic": "Redação",
    "difficulty": "Médio",
    "q": "Em uma redação dissertativa, a introdução normalmente deve?",
    "a": [
      "apresentar o tema e encaminhar a discussão",
      "repetir a conclusão",
      "trazer somente perguntas",
      "ser composta apenas por título"
    ],
    "correct": 0,
    "explain": "A introdução contextualiza o tema e pode apresentar a tese ou encaminhamento argumentativo."
  },
  {
    "id": 46,
    "subject": "Português",
    "topic": "Redação",
    "difficulty": "Fácil",
    "q": "Um texto bem estruturado deve buscar?",
    "a": [
      "coesão e coerência",
      "contradição entre parágrafos",
      "ausência de pontuação",
      "repetição excessiva"
    ],
    "correct": 0,
    "explain": "Coesão liga as partes do texto e coerência contribui para a unidade de sentido."
  },
  {
    "id": 47,
    "subject": "Português",
    "topic": "Ortografia",
    "difficulty": "Médio",
    "q": "Qual palavra está correta?",
    "a": [
      "beneficente",
      "beneficiente",
      "beneficênte",
      "benefisente"
    ],
    "correct": 0,
    "explain": "A grafia correta é “beneficente”."
  },
  {
    "id": 48,
    "subject": "Português",
    "topic": "Acentuação gráfica",
    "difficulty": "Fácil",
    "q": "Qual é a forma correta?",
    "a": [
      "país",
      "pais",
      "países sem acento",
      "paiz"
    ],
    "correct": 0,
    "explain": "“País” recebe acento para marcar o hiato."
  },
  {
    "id": 49,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Difícil",
    "q": "Em “Quando terminar, avise-me”, a vírgula separa?",
    "a": [
      "oração subordinada adverbial anteposta",
      "sujeito e predicado",
      "objeto e verbo",
      "artigo e substantivo"
    ],
    "correct": 0,
    "explain": "A oração temporal vem antes da principal e é separada por vírgula."
  },
  {
    "id": 50,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Médio",
    "q": "“Muito” em “Estudei muito” é?",
    "a": [
      "advérbio",
      "artigo",
      "pronome pessoal",
      "preposição"
    ],
    "correct": 0,
    "explain": "Nesse contexto, “muito” modifica o verbo e funciona como advérbio."
  },
  {
    "id": 51,
    "subject": "Português",
    "topic": "Flexão nominal",
    "difficulty": "Fácil",
    "q": "O plural de “papel” é?",
    "a": [
      "papéis",
      "papeis",
      "papels",
      "papéus"
    ],
    "correct": 0,
    "explain": "O plural correto é “papéis”."
  },
  {
    "id": 52,
    "subject": "Português",
    "topic": "Concordância nominal",
    "difficulty": "Difícil",
    "q": "Assinale a alternativa correta.",
    "a": [
      "Seguem anexos os documentos.",
      "Segue anexos os documentos.",
      "Seguem anexo os documentos.",
      "Segue anexa os documentos."
    ],
    "correct": 0,
    "explain": "“Anexos” concorda com “documentos”."
  },
  {
    "id": 53,
    "subject": "Português",
    "topic": "Flexão verbal",
    "difficulty": "Médio",
    "q": "Em “Se eu estudasse”, o modo verbal é?",
    "a": [
      "subjuntivo",
      "indicativo",
      "imperativo",
      "infinitivo"
    ],
    "correct": 0,
    "explain": "“Estudasse” é forma do pretérito imperfeito do subjuntivo."
  },
  {
    "id": 54,
    "subject": "Português",
    "topic": "Concordância verbal",
    "difficulty": "Difícil",
    "q": "Quanto ao verbo “fazer” indicando tempo decorrido, assinale a frase correta.",
    "a": [
      "Faz dois anos que estudo.",
      "Fazem dois anos que estudo.",
      "Faz dois ano que estudo.",
      "Faziam dois anos que estudo hoje."
    ],
    "correct": 0,
    "explain": "Em indicação de tempo decorrido com “fazer”, usa-se tradicionalmente o singular impessoal."
  },
  {
    "id": 55,
    "subject": "Português",
    "topic": "Formação de palavras",
    "difficulty": "Fácil",
    "q": "“Infeliz” apresenta?",
    "a": [
      "derivação prefixal",
      "composição",
      "derivação regressiva",
      "sigla"
    ],
    "correct": 0,
    "explain": "O prefixo “in-” é acrescentado a “feliz”."
  },
  {
    "id": 56,
    "subject": "Português",
    "topic": "Estrutura da oração",
    "difficulty": "Médio",
    "q": "Em “Choveu ontem”, o verbo é?",
    "a": [
      "impessoal",
      "transitivo direto com sujeito simples",
      "bitransitivo",
      "de ligação com predicativo"
    ],
    "correct": 0,
    "explain": "Verbos que indicam fenômenos da natureza podem ser impessoais nesse uso."
  },
  {
    "id": 57,
    "subject": "Português",
    "topic": "Coordenação e subordinação",
    "difficulty": "Fácil",
    "q": "“Estudei, mas não passei” apresenta oração coordenada?",
    "a": [
      "adversativa",
      "conclusiva",
      "explicativa",
      "alternativa"
    ],
    "correct": 0,
    "explain": "“Mas” estabelece oposição, característica da coordenação adversativa."
  },
  {
    "id": 58,
    "subject": "Português",
    "topic": "Regência nominal e verbal",
    "difficulty": "Difícil",
    "q": "“Obedecer” rege, na norma-padrão, a preposição?",
    "a": [
      "a",
      "de",
      "com",
      "por"
    ],
    "correct": 0,
    "explain": "Diz-se “obedecer a alguém/algo”."
  },
  {
    "id": 59,
    "subject": "Português",
    "topic": "Colocação pronominal",
    "difficulty": "Difícil",
    "q": "Em “Quem me chamou?”, a próclise ocorre por causa de?",
    "a": [
      "pronome relativo/interrogativo atrativo",
      "verbo no futuro",
      "substantivo próprio",
      "pontuação final"
    ],
    "correct": 0,
    "explain": "O elemento atrativo favorece o pronome antes do verbo."
  },
  {
    "id": 60,
    "subject": "Português",
    "topic": "Sinonímia",
    "difficulty": "Fácil",
    "q": "Sinônimo de “início” é?",
    "a": [
      "começo",
      "fim",
      "término",
      "resultado"
    ],
    "correct": 0,
    "explain": "“Começo” é sinônimo de “início”."
  },
  {
    "id": 61,
    "subject": "Português",
    "topic": "Antônimos",
    "difficulty": "Fácil",
    "q": "Antônimo de “provisório” é?",
    "a": [
      "definitivo",
      "temporário",
      "transitório",
      "passageiro"
    ],
    "correct": 0,
    "explain": "“Definitivo” é o oposto de provisório."
  },
  {
    "id": 62,
    "subject": "Português",
    "topic": "Polissemia",
    "difficulty": "Médio",
    "q": "A palavra “banco” pode indicar instituição financeira ou assento. Isso exemplifica?",
    "a": [
      "polissemia",
      "antônimo",
      "homonímia obrigatoriamente",
      "paronímia"
    ],
    "correct": 0,
    "explain": "A palavra “banco” possui sentidos diferentes conforme o contexto."
  },
  {
    "id": 63,
    "subject": "Português",
    "topic": "Denotação e conotação",
    "difficulty": "Fácil",
    "q": "“Aquele homem é uma raposa” usa?",
    "a": [
      "sentido conotativo",
      "sentido exclusivamente literal",
      "linguagem científica",
      "definição de dicionário"
    ],
    "correct": 0,
    "explain": "“Raposa” é usada figuradamente para atribuir determinada característica ao homem."
  },
  {
    "id": 64,
    "subject": "Português",
    "topic": "Recursos linguísticos",
    "difficulty": "Médio",
    "q": "“O vento sussurrava entre as árvores” contém?",
    "a": [
      "personificação",
      "antítese",
      "ironia",
      "catacrese"
    ],
    "correct": 0,
    "explain": "Atribui ao vento uma ação humana: sussurrar."
  },
  {
    "id": 65,
    "subject": "Português",
    "topic": "Interpretação de textos",
    "difficulty": "Fácil",
    "q": "Para localizar informação explícita, o leitor deve?",
    "a": [
      "buscar informação diretamente apresentada no texto",
      "inventar uma conclusão",
      "ignorar o contexto",
      "considerar apenas sua opinião"
    ],
    "correct": 0,
    "explain": "Informação explícita está expressa diretamente no texto."
  },
  {
    "id": 66,
    "subject": "Português",
    "topic": "Redação",
    "difficulty": "Médio",
    "q": "Na conclusão de uma redação, espera-se?",
    "a": [
      "retomar ou encaminhar a ideia central de forma coerente",
      "introduzir um tema totalmente desconectado",
      "eliminar a tese",
      "apresentar apenas palavras soltas"
    ],
    "correct": 0,
    "explain": "A conclusão fecha o desenvolvimento mantendo coerência com o que foi discutido."
  },
  {
    "id": 67,
    "subject": "Matemática",
    "topic": "Propriedades",
    "difficulty": "Fácil",
    "q": "Qual propriedade justifica 3 + 5 = 5 + 3?",
    "a": [
      "comutativa",
      "associativa",
      "distributiva",
      "elemento neutro"
    ],
    "correct": 0,
    "explain": "A ordem das parcelas pode ser trocada na adição: propriedade comutativa."
  },
  {
    "id": 68,
    "subject": "Matemática",
    "topic": "Propriedades",
    "difficulty": "Fácil",
    "q": "Qual propriedade justifica 2(3+4)=2·3+2·4?",
    "a": [
      "distributiva",
      "comutativa",
      "associativa",
      "simétrica"
    ],
    "correct": 0,
    "explain": "A multiplicação foi distribuída sobre a soma."
  },
  {
    "id": 69,
    "subject": "Matemática",
    "topic": "Simplificação de radicais",
    "difficulty": "Médio",
    "q": "Simplifique √50.",
    "a": [
      "5√2",
      "10√5",
      "25√2",
      "2√5"
    ],
    "correct": 0,
    "explain": "√50=√(25·2)=5√2."
  },
  {
    "id": 70,
    "subject": "Matemática",
    "topic": "Operações com radicais",
    "difficulty": "Médio",
    "q": "Quanto vale √8 + √18?",
    "a": [
      "5√2",
      "√26",
      "13√2",
      "6√2"
    ],
    "correct": 0,
    "explain": "√8=2√2 e √18=3√2; soma=5√2."
  },
  {
    "id": 71,
    "subject": "Matemática",
    "topic": "Racionalização",
    "difficulty": "Médio",
    "q": "A forma racionalizada de 1/√2 é?",
    "a": [
      "√2/2",
      "2√2",
      "1/2",
      "√2"
    ],
    "correct": 0,
    "explain": "Multiplicando por √2: √2/2."
  },
  {
    "id": 72,
    "subject": "Matemática",
    "topic": "Equações incompletas",
    "difficulty": "Fácil",
    "q": "Resolva x²-25=0.",
    "a": [
      "x=±5",
      "x=25",
      "x=5 apenas",
      "x=-25"
    ],
    "correct": 0,
    "explain": "x²=25, então x=5 ou x=-5."
  },
  {
    "id": 73,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 3x+6=18.",
    "a": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correct": 0,
    "explain": "3x=12, portanto x=4."
  },
  {
    "id": 74,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 5x-10=0.",
    "a": [
      "2",
      "5",
      "10",
      "-2"
    ],
    "correct": 0,
    "explain": "5x=10, logo x=2."
  },
  {
    "id": 75,
    "subject": "Matemática",
    "topic": "Equações de 2º grau",
    "difficulty": "Médio",
    "q": "As raízes de x²-5x+6=0 são?",
    "a": [
      "2 e 3",
      "1 e 6",
      "-2 e -3",
      "3 e 4"
    ],
    "correct": 0,
    "explain": "(x-2)(x-3)=0."
  },
  {
    "id": 76,
    "subject": "Matemática",
    "topic": "Equações de 2º grau",
    "difficulty": "Médio",
    "q": "Qual é o discriminante de x²-4x+3=0?",
    "a": [
      "4",
      "8",
      "16",
      "-4"
    ],
    "correct": 0,
    "explain": "Δ=b²-4ac=(-4)²-4·1·3=4."
  },
  {
    "id": 77,
    "subject": "Matemática",
    "topic": "Sistemas de equações",
    "difficulty": "Médio",
    "q": "Resolva x+y=10 e x-y=2.",
    "a": [
      "x=6,y=4",
      "x=4,y=6",
      "x=5,y=5",
      "x=8,y=2"
    ],
    "correct": 0,
    "explain": "Somando as equações: 2x=12, x=6 e y=4."
  },
  {
    "id": 78,
    "subject": "Matemática",
    "topic": "Sistemas de equações",
    "difficulty": "Fácil",
    "q": "Se x+y=7 e x=3, então y=",
    "a": [
      "4",
      "3",
      "10",
      "-4"
    ],
    "correct": 0,
    "explain": "Substituindo x=3: 3+y=7, então y=4."
  },
  {
    "id": 79,
    "subject": "Matemática",
    "topic": "Problemas",
    "difficulty": "Fácil",
    "q": "Uma compra de R$ 80 recebeu desconto de R$ 20. Qual o preço final?",
    "a": [
      "R$ 60",
      "R$ 100",
      "R$ 20",
      "R$ 64"
    ],
    "correct": 0,
    "explain": "80-20=60."
  },
  {
    "id": 80,
    "subject": "Matemática",
    "topic": "Relação e função",
    "difficulty": "Médio",
    "q": "Em uma função, cada elemento do domínio deve estar associado a?",
    "a": [
      "um único elemento da imagem",
      "pelo menos dois elementos sempre",
      "nenhum elemento",
      "todos os elementos do contradomínio"
    ],
    "correct": 0,
    "explain": "Essa é a condição essencial de uma função."
  },
  {
    "id": 81,
    "subject": "Matemática",
    "topic": "Função de 1º grau",
    "difficulty": "Fácil",
    "q": "Na função f(x)=2x+3, f(4)=?",
    "a": [
      "11",
      "8",
      "7",
      "5"
    ],
    "correct": 0,
    "explain": "2·4+3=11."
  },
  {
    "id": 82,
    "subject": "Matemática",
    "topic": "Função constante",
    "difficulty": "Fácil",
    "q": "Qual é a característica de uma função constante?",
    "a": [
      "o valor de saída não varia com x",
      "o gráfico é sempre uma parábola",
      "o domínio tem um elemento",
      "o coeficiente angular é sempre 1"
    ],
    "correct": 0,
    "explain": "f(x)=c tem o mesmo valor para todo x do domínio."
  },
  {
    "id": 83,
    "subject": "Matemática",
    "topic": "Domínio e imagem",
    "difficulty": "Médio",
    "q": "Na função f(x)=x+1 definida nos reais, o domínio é?",
    "a": [
      "R",
      "apenas positivos",
      "apenas inteiros",
      "{1}"
    ],
    "correct": 0,
    "explain": "A expressão está definida para todo número real."
  },
  {
    "id": 84,
    "subject": "Matemática",
    "topic": "Razão e proporção",
    "difficulty": "Fácil",
    "q": "A razão 8:4 é equivalente a?",
    "a": [
      "2:1",
      "1:2",
      "4:8",
      "8:2"
    ],
    "correct": 0,
    "explain": "8/4=2, assim 2:1 é equivalente."
  },
  {
    "id": 85,
    "subject": "Matemática",
    "topic": "Grandezas proporcionais",
    "difficulty": "Fácil",
    "q": "Se 3 cadernos custam R$ 18, mantendo o preço unitário, 5 custam?",
    "a": [
      "R$ 30",
      "R$ 36",
      "R$ 23",
      "R$ 25"
    ],
    "correct": 0,
    "explain": "Cada caderno custa 6; 5×6=30."
  },
  {
    "id": 86,
    "subject": "Matemática",
    "topic": "Regra de três simples",
    "difficulty": "Médio",
    "q": "4 máquinas fazem um serviço em 12 dias. Mantendo produtividade, 8 máquinas fazem em?",
    "a": [
      "6 dias",
      "24 dias",
      "10 dias",
      "3 dias"
    ],
    "correct": 0,
    "explain": "Grandezas inversamente proporcionais: dobrando máquinas, reduz-se o tempo pela metade."
  },
  {
    "id": 87,
    "subject": "Matemática",
    "topic": "Regra de três composta",
    "difficulty": "Médio",
    "q": "Se 2 pessoas fazem 1 serviço em 6 dias, nas mesmas condições, 3 pessoas fariam em?",
    "a": [
      "4 dias",
      "9 dias",
      "3 dias",
      "12 dias"
    ],
    "correct": 0,
    "explain": "Com produtividade proporcional ao número de pessoas: 2·6=3·x, x=4."
  },
  {
    "id": 88,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 15% de 200?",
    "a": [
      "30",
      "15",
      "20",
      "35"
    ],
    "correct": 0,
    "explain": "0,15×200=30."
  },
  {
    "id": 89,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Um produto de R$ 100 aumenta 20%. Novo preço?",
    "a": [
      "R$ 120",
      "R$ 80",
      "R$ 100",
      "R$ 140"
    ],
    "correct": 0,
    "explain": "20% de 100 é 20; novo preço=120."
  },
  {
    "id": 90,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 2% ao mês por 3 meses geram juros simples de?",
    "a": [
      "R$ 60",
      "R$ 20",
      "R$ 600",
      "R$ 1.060"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·0,02·3=60."
  },
  {
    "id": 91,
    "subject": "Matemática",
    "topic": "Juros compostos",
    "difficulty": "Médio",
    "q": "R$ 1.000 a 10% ao mês por 2 meses resultam em montante de?",
    "a": [
      "R$ 1.210",
      "R$ 1.200",
      "R$ 1.100",
      "R$ 1.020"
    ],
    "correct": 0,
    "explain": "M=1000·(1,1)^2=1210."
  },
  {
    "id": 92,
    "subject": "Matemática",
    "topic": "Números inteiros",
    "difficulty": "Fácil",
    "q": "Quanto é (-7)+12?",
    "a": [
      "5",
      "-5",
      "19",
      "-19"
    ],
    "correct": 0,
    "explain": "Somando: 12-7=5."
  },
  {
    "id": 93,
    "subject": "Matemática",
    "topic": "Números inteiros",
    "difficulty": "Fácil",
    "q": "Quanto é (-3)·(-4)?",
    "a": [
      "12",
      "-12",
      "7",
      "-7"
    ],
    "correct": 0,
    "explain": "Produto de dois números negativos é positivo: 12."
  },
  {
    "id": 94,
    "subject": "Matemática",
    "topic": "Números racionais",
    "difficulty": "Fácil",
    "q": "Quanto é 1/2 + 1/4?",
    "a": [
      "3/4",
      "2/6",
      "1/6",
      "1/8"
    ],
    "correct": 0,
    "explain": "1/2=2/4; 2/4+1/4=3/4."
  },
  {
    "id": 95,
    "subject": "Matemática",
    "topic": "Expressões algébricas",
    "difficulty": "Fácil",
    "q": "Simplifique 3x+2x-4.",
    "a": [
      "5x-4",
      "5x+4",
      "x-4",
      "6x-4"
    ],
    "correct": 0,
    "explain": "Somam-se os termos semelhantes: 3x+2x=5x."
  },
  {
    "id": 96,
    "subject": "Matemática",
    "topic": "Operações com radicais",
    "difficulty": "Fácil",
    "q": "Quanto vale √9·√4?",
    "a": [
      "6",
      "13",
      "36",
      "5"
    ],
    "correct": 0,
    "explain": "√9=3 e √4=2; produto=6."
  },
  {
    "id": 97,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 2x + 3 = 13.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "2x=10, portanto x=5."
  },
  {
    "id": 98,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 4x + 5 = 25.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "4x=20, portanto x=5."
  },
  {
    "id": 99,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 6x + 7 = 37.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "6x=30, portanto x=5."
  },
  {
    "id": 100,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 8x + 9 = 49.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "8x=40, portanto x=5."
  },
  {
    "id": 101,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 9x + 4 = 49.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "9x=45, portanto x=5."
  },
  {
    "id": 102,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 7x + 6 = 41.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "7x=35, portanto x=5."
  },
  {
    "id": 103,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 12x + 5 = 65.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "12x=60, portanto x=5."
  },
  {
    "id": 104,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 15x + 4 = 79.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "15x=75, portanto x=5."
  },
  {
    "id": 105,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 18x + 7 = 97.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "18x=90, portanto x=5."
  },
  {
    "id": 106,
    "subject": "Matemática",
    "topic": "Equações de 1º grau",
    "difficulty": "Fácil",
    "q": "Resolva 21x + 3 = 108.",
    "a": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correct": 0,
    "explain": "21x=105, portanto x=5."
  },
  {
    "id": 107,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 10% de 200?",
    "a": [
      "20",
      "30",
      "180",
      "10"
    ],
    "correct": 0,
    "explain": "10/100 × 200 = 20."
  },
  {
    "id": 108,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 12% de 200?",
    "a": [
      "24",
      "36",
      "176",
      "12"
    ],
    "correct": 0,
    "explain": "12/100 × 200 = 24."
  },
  {
    "id": 109,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Uma taxa de inscrição de R$ 200 recebe desconto de 15%. Qual é o valor do desconto?",
    "a": [
      "R$ 30",
      "R$ 45",
      "R$ 170",
      "R$ 15"
    ],
    "correct": 0,
    "explain": "15% de 200 = 0,15 × 200 = 30. O desconto é de R$ 30."
  },
  {
    "id": 110,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 18% de 200?",
    "a": [
      "36",
      "54",
      "164",
      "18"
    ],
    "correct": 0,
    "explain": "18/100 × 200 = 36."
  },
  {
    "id": 111,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 20% de 200?",
    "a": [
      "40",
      "60",
      "160",
      "20"
    ],
    "correct": 0,
    "explain": "20/100 × 200 = 40."
  },
  {
    "id": 112,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 25% de 200?",
    "a": [
      "50",
      "75",
      "150",
      "25"
    ],
    "correct": 0,
    "explain": "25/100 × 200 = 50."
  },
  {
    "id": 113,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 30% de 200?",
    "a": [
      "60",
      "90",
      "140",
      "30"
    ],
    "correct": 0,
    "explain": "30/100 × 200 = 60."
  },
  {
    "id": 114,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 35% de 200?",
    "a": [
      "70",
      "105",
      "130",
      "35"
    ],
    "correct": 0,
    "explain": "35/100 × 200 = 70."
  },
  {
    "id": 115,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 40% de 200?",
    "a": [
      "80",
      "120",
      "160",
      "40"
    ],
    "correct": 0,
    "explain": "40/100 × 200 = 80."
  },
  {
    "id": 116,
    "subject": "Matemática",
    "topic": "Porcentagem",
    "difficulty": "Fácil",
    "q": "Quanto é 45% de 200?",
    "a": [
      "90",
      "135",
      "110",
      "45"
    ],
    "correct": 0,
    "explain": "45/100 × 200 = 90."
  },
  {
    "id": 117,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 1% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 40",
      "R$ 80",
      "R$ 1040",
      "R$ 4"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·1/100·4=R$ 40."
  },
  {
    "id": 118,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 2% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 80",
      "R$ 160",
      "R$ 1080",
      "R$ 8"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·2/100·4=R$ 80."
  },
  {
    "id": 119,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 3% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 120",
      "R$ 240",
      "R$ 1120",
      "R$ 12"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·3/100·4=R$ 120."
  },
  {
    "id": 120,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 4% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 160",
      "R$ 320",
      "R$ 1160",
      "R$ 16"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·4/100·4=R$ 160."
  },
  {
    "id": 121,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 5% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 200",
      "R$ 400",
      "R$ 1200",
      "R$ 20"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·5/100·4=R$ 200."
  },
  {
    "id": 122,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 6% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 240",
      "R$ 480",
      "R$ 1240",
      "R$ 24"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·6/100·4=R$ 240."
  },
  {
    "id": 123,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 8% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 320",
      "R$ 640",
      "R$ 1320",
      "R$ 32"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·8/100·4=R$ 320."
  },
  {
    "id": 124,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 10% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 400",
      "R$ 800",
      "R$ 1400",
      "R$ 40"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·10/100·4=R$ 400."
  },
  {
    "id": 125,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 12% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 480",
      "R$ 960",
      "R$ 1480",
      "R$ 48"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·12/100·4=R$ 480."
  },
  {
    "id": 126,
    "subject": "Matemática",
    "topic": "Juros simples",
    "difficulty": "Médio",
    "q": "R$ 1.000 aplicados a 15% ao mês por 4 meses geram juros simples de?",
    "a": [
      "R$ 600",
      "R$ 1200",
      "R$ 1600",
      "R$ 60"
    ],
    "correct": 0,
    "explain": "J=C·i·t=1000·15/100·4=R$ 600."
  },
  {
    "id": 127,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Princípios e diretrizes do SUS",
    "difficulty": "Fácil",
    "q": "Qual princípio do SUS expressa que todos têm direito de acesso aos serviços de saúde?",
    "a": [
      "universalidade",
      "seletividade",
      "privatização",
      "exclusividade"
    ],
    "correct": 0,
    "explain": "Universalidade significa acesso à saúde como direito de todos."
  },
  {
    "id": 128,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Princípios e diretrizes do SUS",
    "difficulty": "Médio",
    "q": "Integralidade significa, de modo geral?",
    "a": [
      "considerar o cuidado de forma articulada e abrangente",
      "atender apenas emergências",
      "atender somente doenças infecciosas",
      "limitar o cuidado à consulta médica"
    ],
    "correct": 0,
    "explain": "Integralidade busca atenção articulada às necessidades de saúde."
  },
  {
    "id": 129,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Princípios e diretrizes do SUS",
    "difficulty": "Médio",
    "q": "Equidade busca?",
    "a": [
      "reconhecer necessidades diferentes e reduzir desigualdades",
      "tratar todos de forma idêntica em qualquer situação",
      "priorizar apenas quem paga",
      "eliminar a prevenção"
    ],
    "correct": 0,
    "explain": "Equidade considera diferenças e necessidades para reduzir desigualdades."
  },
  {
    "id": 130,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Vigilância epidemiológica",
    "difficulty": "Fácil",
    "q": "A vigilância epidemiológica busca principalmente?",
    "a": [
      "conhecer e acompanhar eventos de saúde para orientar medidas de controle",
      "substituir todo atendimento clínico",
      "emitir documentos trabalhistas",
      "realizar apenas vacinação"
    ],
    "correct": 0,
    "explain": "A vigilância produz informação para prevenção e controle de agravos."
  },
  {
    "id": 131,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Doenças transmissíveis",
    "difficulty": "Fácil",
    "q": "Uma medida importante para interromper cadeias de transmissão é?",
    "a": [
      "identificar casos e adotar medidas de prevenção adequadas",
      "ignorar sintomas",
      "compartilhar objetos pessoais",
      "evitar qualquer comunicação com a equipe"
    ],
    "correct": 0,
    "explain": "Identificação e medidas oportunas ajudam a controlar transmissão."
  },
  {
    "id": 132,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Visita domiciliar",
    "difficulty": "Médio",
    "q": "Durante uma visita domiciliar, o ACS deve?",
    "a": [
      "observar necessidades, orientar e comunicar situações relevantes à equipe",
      "prescrever medicamentos",
      "alterar diagnósticos médicos",
      "realizar procedimentos fora de sua competência"
    ],
    "correct": 0,
    "explain": "O ACS atua dentro de suas atribuições, orientando e levando informações à equipe."
  },
  {
    "id": 133,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Trabalho de grupo",
    "difficulty": "Fácil",
    "q": "Uma atividade educativa em grupo deve priorizar?",
    "a": [
      "participação, diálogo e linguagem adequada à comunidade",
      "somente leitura técnica",
      "exposição sem interação",
      "informações sem relação com o território"
    ],
    "correct": 0,
    "explain": "Educação em saúde deve favorecer participação e compreensão."
  },
  {
    "id": 134,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Testes imunológicos",
    "difficulty": "Médio",
    "q": "Testes imunológicos podem ser usados para?",
    "a": [
      "detectar respostas ou componentes relacionados ao sistema imunológico conforme o teste",
      "substituir qualquer exame clínico",
      "determinar sempre a cura de uma doença",
      "dispensar avaliação profissional"
    ],
    "correct": 0,
    "explain": "A finalidade depende do teste, mas envolve marcadores ou respostas imunológicas."
  },
  {
    "id": 135,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Notificação de doenças transmissíveis",
    "difficulty": "Médio",
    "q": "Quando uma doença é de notificação compulsória, o profissional deve?",
    "a": [
      "seguir o fluxo e os prazos definidos pelas normas de vigilância",
      "aguardar divulgação em redes sociais",
      "notificar somente se o paciente pedir",
      "não comunicar a equipe"
    ],
    "correct": 0,
    "explain": "A notificação segue normas e fluxos oficiais de vigilância."
  },
  {
    "id": 136,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Diagnóstico de saúde da comunidade",
    "difficulty": "Médio",
    "q": "O diagnóstico de saúde da comunidade deve considerar?",
    "a": [
      "dados do território, população, riscos e condições de vida",
      "apenas opiniões pessoais",
      "somente número de consultas",
      "somente dados de hospitais privados"
    ],
    "correct": 0,
    "explain": "O diagnóstico territorial integra informações sociais, ambientais e de saúde."
  },
  {
    "id": 137,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Orientação à comunidade",
    "difficulty": "Fácil",
    "q": "Ao orientar uma família sobre serviço de saúde, o ACS deve?",
    "a": [
      "informar de forma clara sobre serviços disponíveis e encaminhamentos adequados",
      "garantir resultado que não depende dele",
      "substituir o profissional responsável",
      "fornecer diagnóstico médico"
    ],
    "correct": 0,
    "explain": "A orientação deve ser clara e dentro das atribuições."
  },
  {
    "id": 138,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Avaliação das visitas domiciliares",
    "difficulty": "Médio",
    "q": "A avaliação das visitas deve considerar?",
    "a": [
      "necessidades identificadas, orientações, encaminhamentos e acompanhamento",
      "apenas quantidade de casas visitadas",
      "somente duração da visita",
      "nenhuma informação registrada"
    ],
    "correct": 0,
    "explain": "A qualidade do acompanhamento depende do que foi identificado e encaminhado."
  },
  {
    "id": 139,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Epidemiologia",
    "difficulty": "Médio",
    "q": "Incidência refere-se, em geral, a?",
    "a": [
      "casos novos em uma população durante determinado período",
      "todos os casos existentes em qualquer momento",
      "número de consultas",
      "taxa de vacinação apenas"
    ],
    "correct": 0,
    "explain": "Incidência mede ocorrência de casos novos em período e população definidos."
  },
  {
    "id": 140,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Intoxicação por agrotóxicos",
    "difficulty": "Difícil",
    "q": "Em suspeita de intoxicação por agrotóxico, a conduta adequada é?",
    "a": [
      "afastar a exposição e buscar atendimento conforme orientação dos serviços de saúde",
      "induzir vômito por conta própria",
      "oferecer qualquer medicamento",
      "continuar a exposição"
    ],
    "correct": 0,
    "explain": "A prioridade é interromper a exposição e procurar avaliação adequada; não se deve improvisar tratamento."
  },
  {
    "id": 141,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Saúde do escolar",
    "difficulty": "Fácil",
    "q": "Ações de saúde no ambiente escolar podem incluir?",
    "a": [
      "promoção da saúde, prevenção e educação em saúde",
      "somente atendimento hospitalar",
      "somente distribuição de medicamentos",
      "apenas atividades esportivas"
    ],
    "correct": 0,
    "explain": "Saúde escolar envolve ações de promoção, prevenção e educação."
  },
  {
    "id": 142,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Vacinação",
    "difficulty": "Fácil",
    "q": "A vacinação contribui principalmente para?",
    "a": [
      "prevenir doenças e reduzir circulação de agentes infecciosos",
      "tratar qualquer doença já instalada",
      "substituir alimentação saudável",
      "dispensar vigilância epidemiológica"
    ],
    "correct": 0,
    "explain": "Vacinas estimulam proteção contra doenças específicas e ajudam no controle coletivo."
  },
  {
    "id": 143,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Higiene e alimentação",
    "difficulty": "Fácil",
    "q": "Uma orientação adequada de higiene dos alimentos inclui?",
    "a": [
      "higienizar mãos e utensílios e conservar alimentos corretamente",
      "deixar alimentos perecíveis em temperatura ambiente por longos períodos",
      "usar qualquer água sem avaliação",
      "misturar alimento cru e cozido sem cuidado"
    ],
    "correct": 0,
    "explain": "Boas práticas reduzem risco de contaminação."
  },
  {
    "id": 144,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Entrevista e visita domiciliar",
    "difficulty": "Médio",
    "q": "Na entrevista, o ACS deve?",
    "a": [
      "escutar com respeito, preservar privacidade e registrar informações pertinentes",
      "interromper constantemente",
      "expor informações da família",
      "prometer soluções fora de sua competência"
    ],
    "correct": 0,
    "explain": "Escuta qualificada e respeito à privacidade são essenciais."
  },
  {
    "id": 145,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Cadastramento familiar e territorial",
    "difficulty": "Fácil",
    "q": "A microárea é importante porque permite?",
    "a": [
      "organizar o acompanhamento das famílias em território definido",
      "substituir todo o cadastro municipal",
      "limitar a população atendida",
      "impedir ações coletivas"
    ],
    "correct": 0,
    "explain": "A base territorial organiza o trabalho e o acompanhamento das famílias."
  },
  {
    "id": 146,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Prevenção e controle da malária e dengue",
    "difficulty": "Fácil",
    "q": "No controle da dengue, uma ação comunitária importante é?",
    "a": [
      "eliminar criadouros de mosquitos e orientar a população",
      "armazenar água sem proteção",
      "deixar recipientes expostos",
      "evitar comunicação de casos"
    ],
    "correct": 0,
    "explain": "Reduzir criadouros é medida importante de prevenção."
  },
  {
    "id": 147,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Visita domiciliar",
    "difficulty": "Médio",
    "q": "Uma visita domiciliar deve respeitar?",
    "a": [
      "privacidade, segurança e limites profissionais",
      "entrada obrigatória em qualquer residência",
      "exposição pública das informações",
      "prescrição de medicamentos"
    ],
    "correct": 0,
    "explain": "A visita deve respeitar direitos e limites profissionais."
  },
  {
    "id": 148,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Vigilância epidemiológica",
    "difficulty": "Fácil",
    "q": "Um dado epidemiológico útil é aquele que?",
    "a": [
      "ajuda a identificar padrões e orientar ações",
      "é mantido sem análise",
      "serve apenas para divulgação",
      "não tem relação com o território"
    ],
    "correct": 0,
    "explain": "Dados devem subsidiar decisões de saúde."
  },
  {
    "id": 149,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Cadastramento familiar e territorial",
    "difficulty": "Fácil",
    "q": "Manter cadastro atualizado permite?",
    "a": [
      "acompanhar mudanças e necessidades do território",
      "impedir novas famílias de acessar serviços",
      "substituir a equipe de saúde",
      "eliminar visitas domiciliares"
    ],
    "correct": 0,
    "explain": "Atualização melhora o acompanhamento territorial."
  },
  {
    "id": 150,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Vacinação",
    "difficulty": "Médio",
    "q": "Ao orientar sobre vacinação, é adequado?",
    "a": [
      "consultar calendário e orientar busca do serviço de vacinação",
      "inventar esquemas",
      "recomendar interromper todas as vacinas",
      "ignorar registros"
    ],
    "correct": 0,
    "explain": "A orientação deve seguir calendário e normas oficiais."
  },
  {
    "id": 151,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Higiene e alimentação",
    "difficulty": "Fácil",
    "q": "Para prevenir doenças transmitidas por alimentos, é importante?",
    "a": [
      "separar alimentos crus de alimentos prontos",
      "deixar carnes cozidas junto a carnes cruas",
      "reutilizar utensílios contaminados sem higienização",
      "dispensar conservação adequada"
    ],
    "correct": 0,
    "explain": "A separação reduz risco de contaminação cruzada."
  },
  {
    "id": 152,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Epidemiologia",
    "difficulty": "Médio",
    "q": "Prevalência representa, em geral?",
    "a": [
      "casos existentes em uma população em determinado período ou ponto de tempo",
      "somente casos novos",
      "apenas óbitos",
      "somente atendimentos"
    ],
    "correct": 0,
    "explain": "Prevalência considera o conjunto de casos existentes."
  },
  {
    "id": 153,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Doenças transmissíveis",
    "difficulty": "Médio",
    "q": "Uma ação de prevenção deve ser?",
    "a": [
      "adequada ao modo de transmissão e ao contexto",
      "igual para todas as doenças",
      "baseada em boatos",
      "sem considerar o território"
    ],
    "correct": 0,
    "explain": "A medida depende da cadeia e do modo de transmissão."
  },
  {
    "id": 154,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Orientação à comunidade",
    "difficulty": "Fácil",
    "q": "Uma comunicação de saúde eficaz deve usar?",
    "a": [
      "linguagem clara e adequada ao público",
      "apenas termos técnicos",
      "ameaças",
      "informações não verificadas"
    ],
    "correct": 0,
    "explain": "A clareza favorece compreensão e adesão."
  },
  {
    "id": 155,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Diagnóstico de saúde da comunidade",
    "difficulty": "Fácil",
    "q": "Mapear riscos ambientais ajuda a?",
    "a": [
      "planejar ações de prevenção no território",
      "eliminar a necessidade de dados",
      "substituir o cadastro",
      "impedir participação comunitária"
    ],
    "correct": 0,
    "explain": "O território orienta planejamento e prevenção."
  },
  {
    "id": 156,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Intoxicação por agrotóxicos",
    "difficulty": "Difícil",
    "q": "Em caso de exposição química, é importante?",
    "a": [
      "seguir orientação de emergência e informar qual produto esteve envolvido, se possível",
      "misturar substâncias para neutralizar",
      "dar leite obrigatoriamente em qualquer caso",
      "continuar trabalhando"
    ],
    "correct": 0,
    "explain": "Informações sobre o produto ajudam na avaliação e conduta adequada."
  },
  {
    "id": 207,
    "subject": "Orientador Social",
    "topic": "PNAS",
    "difficulty": "Fácil",
    "q": "A PNAS está relacionada principalmente à organização da?",
    "a": [
      "Política de Assistência Social",
      "Política Monetária",
      "Política Industrial",
      "Política de Transporte"
    ],
    "correct": 0,
    "explain": "PNAS significa Política Nacional de Assistência Social."
  },
  {
    "id": 208,
    "subject": "Orientador Social",
    "topic": "SUAS",
    "difficulty": "Fácil",
    "q": "O SUAS organiza a?",
    "a": [
      "gestão e oferta da assistência social",
      "educação básica",
      "previdência privada",
      "política cambial"
    ],
    "correct": 0,
    "explain": "SUAS é o Sistema Único de Assistência Social."
  },
  {
    "id": 209,
    "subject": "Orientador Social",
    "topic": "SUAS",
    "difficulty": "Médio",
    "q": "A proteção social básica busca principalmente?",
    "a": [
      "prevenir situações de risco e fortalecer vínculos",
      "atuar apenas após violações graves",
      "substituir a saúde",
      "punir famílias"
    ],
    "correct": 0,
    "explain": "A proteção básica tem caráter preventivo e de fortalecimento de vínculos."
  },
  {
    "id": 210,
    "subject": "Orientador Social",
    "topic": "Estatuto do Idoso",
    "difficulty": "Fácil",
    "q": "O Estatuto do Idoso protege direitos das pessoas com?",
    "a": [
      "60 anos ou mais",
      "55 anos ou mais",
      "65 anos apenas",
      "70 anos ou mais"
    ],
    "correct": 0,
    "explain": "Para fins legais, pessoa idosa é aquela com 60 anos ou mais."
  },
  {
    "id": 211,
    "subject": "Orientador Social",
    "topic": "Política Nacional de Integração da Pessoa com Deficiência",
    "difficulty": "Fácil",
    "q": "A perspectiva de direitos da pessoa com deficiência prioriza?",
    "a": [
      "inclusão, acessibilidade e participação social",
      "isolamento institucional",
      "restrição de convivência",
      "exclusão do trabalho"
    ],
    "correct": 0,
    "explain": "A política de direitos busca inclusão e participação em igualdade de oportunidades."
  },
  {
    "id": 212,
    "subject": "Orientador Social",
    "topic": "Plano Nacional de Enfrentamento ao Abuso Sexual e Exploração Sexual de Crianças e Adolescentes",
    "difficulty": "Médio",
    "q": "O enfrentamento à violência sexual contra crianças e adolescentes envolve?",
    "a": [
      "prevenção, proteção, atendimento, responsabilização e articulação da rede",
      "somente punição",
      "somente campanhas",
      "apenas atendimento médico"
    ],
    "correct": 0,
    "explain": "O enfrentamento exige ações articuladas e proteção integral."
  },
  {
    "id": 213,
    "subject": "Orientador Social",
    "topic": "ECA – Lei nº 8.069/1990",
    "difficulty": "Fácil",
    "q": "O ECA adota a doutrina da?",
    "a": [
      "proteção integral",
      "menoridade penal automática",
      "segregação familiar",
      "assistência exclusivamente privada"
    ],
    "correct": 0,
    "explain": "O Estatuto da Criança e do Adolescente adota a proteção integral."
  },
  {
    "id": 214,
    "subject": "Orientador Social",
    "topic": "ECA – Lei nº 8.069/1990",
    "difficulty": "Fácil",
    "q": "Segundo o ECA, criança é a pessoa?",
    "a": [
      "até 12 anos incompletos",
      "de 12 a 18 anos",
      "até 14 anos completos",
      "com 18 a 21 anos"
    ],
    "correct": 0,
    "explain": "Criança é a pessoa até 12 anos incompletos; adolescente vai de 12 a 18 anos."
  },
  {
    "id": 215,
    "subject": "Orientador Social",
    "topic": "CRAS",
    "difficulty": "Fácil",
    "q": "O CRAS é uma unidade de referência da?",
    "a": [
      "Proteção Social Básica",
      "Proteção Social Especial de Alta Complexidade exclusivamente",
      "saúde hospitalar",
      "educação profissional"
    ],
    "correct": 0,
    "explain": "O CRAS é referência territorial da proteção social básica."
  },
  {
    "id": 216,
    "subject": "Orientador Social",
    "topic": "Trabalho social com famílias",
    "difficulty": "Médio",
    "q": "O trabalho social com famílias deve considerar?",
    "a": [
      "singularidades, território, vínculos e direitos",
      "apenas renda",
      "somente comportamento individual",
      "punição por vulnerabilidade"
    ],
    "correct": 0,
    "explain": "A abordagem considera contexto familiar, territorial e acesso a direitos."
  },
  {
    "id": 217,
    "subject": "Orientador Social",
    "topic": "Atribuições do Orientador Social",
    "difficulty": "Fácil",
    "q": "Uma atribuição do orientador social é?",
    "a": [
      "organizar e facilitar oficinas e atividades coletivas",
      "prescrever medicamentos",
      "emitir sentença judicial",
      "definir diagnóstico médico"
    ],
    "correct": 0,
    "explain": "O edital prevê organização e facilitação de oficinas e atividades."
  },
  {
    "id": 218,
    "subject": "Orientador Social",
    "topic": "Abordagem social e busca ativa",
    "difficulty": "Médio",
    "q": "Busca ativa significa?",
    "a": [
      "identificar e aproximar-se de usuários ou famílias que precisam acessar serviços e direitos",
      "aguardar passivamente a procura",
      "excluir usuários ausentes",
      "realizar investigação policial"
    ],
    "correct": 0,
    "explain": "Busca ativa procura aproximar a rede de quem necessita de proteção e acesso a direitos."
  },
  {
    "id": 219,
    "subject": "Orientador Social",
    "topic": "Oficinas e atividades coletivas",
    "difficulty": "Fácil",
    "q": "Uma oficina socioeducativa deve favorecer?",
    "a": [
      "participação, convivência e desenvolvimento de capacidades",
      "constrangimento",
      "competição obrigatória",
      "isolamento"
    ],
    "correct": 0,
    "explain": "Atividades socioeducativas buscam participação e fortalecimento de vínculos."
  },
  {
    "id": 220,
    "subject": "Orientador Social",
    "topic": "Rede socioassistencial",
    "difficulty": "Médio",
    "q": "Articulação em rede significa?",
    "a": [
      "integrar serviços e políticas para responder às necessidades dos usuários",
      "trabalhar isoladamente",
      "encaminhar sem acompanhamento",
      "substituir todas as políticas por uma unidade"
    ],
    "correct": 0,
    "explain": "A rede amplia a capacidade de resposta por meio da articulação."
  },
  {
    "id": 221,
    "subject": "Orientador Social",
    "topic": "Garantia de direitos",
    "difficulty": "Médio",
    "q": "Uma orientação adequada ao usuário deve?",
    "a": [
      "informar direitos e caminhos de acesso aos serviços",
      "prometer benefício garantido",
      "negar informações",
      "expor sua situação"
    ],
    "correct": 0,
    "explain": "O orientador apoia acesso a direitos e serviços, sem prometer resultados fora de sua competência."
  },
  {
    "id": 222,
    "subject": "Orientador Social",
    "topic": "Fortalecimento de vínculos",
    "difficulty": "Fácil",
    "q": "Atividades de convivência podem contribuir para?",
    "a": [
      "fortalecer vínculos familiares e comunitários",
      "romper vínculos",
      "isolar famílias",
      "substituir toda proteção social"
    ],
    "correct": 0,
    "explain": "Convivência e socialização são instrumentos de fortalecimento de vínculos."
  },
  {
    "id": 223,
    "subject": "Orientador Social",
    "topic": "Atribuições do Orientador Social",
    "difficulty": "Médio",
    "q": "O registro das atividades serve para?",
    "a": [
      "documentar o trabalho e subsidiar o acompanhamento pela equipe",
      "expor dados publicamente",
      "substituir reuniões",
      "eliminar planejamento"
    ],
    "correct": 0,
    "explain": "Registros apoiam continuidade, avaliação e planejamento do trabalho."
  },
  {
    "id": 224,
    "subject": "Orientador Social",
    "topic": "Atribuições do Orientador Social",
    "difficulty": "Fácil",
    "q": "Na recepção, espera-se do orientador?",
    "a": [
      "acolhimento e ambiência respeitosa",
      "julgamento moral",
      "recusa automática",
      "exposição do usuário"
    ],
    "correct": 0,
    "explain": "Acolhimento e respeito são compatíveis com a função."
  },
  {
    "id": 225,
    "subject": "Orientador Social",
    "topic": "ECA – Lei nº 8.069/1990",
    "difficulty": "Médio",
    "q": "A prioridade absoluta de crianças e adolescentes implica?",
    "a": [
      "atenção prioritária à efetivação de seus direitos",
      "exclusão de políticas sociais",
      "apenas prioridade escolar",
      "somente atendimento médico"
    ],
    "correct": 0,
    "explain": "A prioridade absoluta orienta políticas e atendimento dos direitos."
  },
  {
    "id": 226,
    "subject": "Orientador Social",
    "topic": "Estatuto do Idoso",
    "difficulty": "Fácil",
    "q": "A pessoa idosa tem direito a?",
    "a": [
      "dignidade, respeito e convivência familiar e comunitária",
      "isolamento obrigatório",
      "restrição automática de trabalho",
      "perda de autonomia"
    ],
    "correct": 0,
    "explain": "O Estatuto assegura direitos fundamentais, dignidade e convivência."
  },
  {
    "id": 227,
    "subject": "Orientador Social",
    "topic": "PNAS",
    "difficulty": "Médio",
    "q": "A assistência social é política pública de?",
    "a": [
      "seguridade social",
      "segurança nacional",
      "política cambial",
      "política tributária"
    ],
    "correct": 0,
    "explain": "A assistência social integra a seguridade social."
  },
  {
    "id": 228,
    "subject": "Orientador Social",
    "topic": "SUAS",
    "difficulty": "Médio",
    "q": "A proteção social especial atende situações que envolvem?",
    "a": [
      "risco pessoal e social e/ou violação de direitos",
      "somente prevenção básica",
      "somente vacinação",
      "apenas educação formal"
    ],
    "correct": 0,
    "explain": "A proteção especial responde a situações de risco pessoal/social e violações de direitos."
  },
  {
    "id": 229,
    "subject": "Orientador Social",
    "topic": "CRAS",
    "difficulty": "Fácil",
    "q": "O CRAS tem atuação territorial?",
    "a": [
      "sim, como referência da proteção social básica no território",
      "não, atua exclusivamente em hospitais",
      "somente em tribunais",
      "apenas em escolas privadas"
    ],
    "correct": 0,
    "explain": "O CRAS é uma unidade territorial da proteção social básica."
  },
  {
    "id": 230,
    "subject": "Orientador Social",
    "topic": "Trabalho social com famílias",
    "difficulty": "Médio",
    "q": "Um princípio importante é?",
    "a": [
      "respeito à autonomia e participação das famílias",
      "culpabilização das famílias",
      "exposição de informações",
      "padronização absoluta"
    ],
    "correct": 0,
    "explain": "O trabalho deve respeitar autonomia, participação e direitos."
  },
  {
    "id": 231,
    "subject": "Orientador Social",
    "topic": "Rede socioassistencial",
    "difficulty": "Médio",
    "q": "Um encaminhamento responsável envolve?",
    "a": [
      "orientar e, quando previsto, acompanhar o acesso ao serviço",
      "entregar um papel e encerrar qualquer acompanhamento",
      "prometer atendimento imediato",
      "divulgar dados pessoais"
    ],
    "correct": 0,
    "explain": "O edital prevê apoio no acompanhamento dos encaminhamentos."
  },
  {
    "id": 232,
    "subject": "Orientador Social",
    "topic": "Garantia de direitos",
    "difficulty": "Difícil",
    "q": "Privacidade das informações significa?",
    "a": [
      "proteger dados e compartilhar somente quando necessário e conforme regras",
      "publicar relatos em redes sociais",
      "contar a situação a qualquer pessoa",
      "dispensar registros"
    ],
    "correct": 0,
    "explain": "Privacidade exige cuidado com informações pessoais e compartilhamento adequado."
  },
  {
    "id": 233,
    "subject": "Orientador Social",
    "topic": "Oficinas e atividades coletivas",
    "difficulty": "Médio",
    "q": "Atividades intergeracionais podem?",
    "a": [
      "promover convivência entre diferentes gerações",
      "impedir participação de idosos",
      "substituir atendimento individual sempre",
      "limitar vínculos"
    ],
    "correct": 0,
    "explain": "Ações intergeracionais podem ampliar convivência e participação."
  },
  {
    "id": 234,
    "subject": "Orientador Social",
    "topic": "Atribuições do Orientador Social",
    "difficulty": "Fácil",
    "q": "Participar de reuniões de equipe serve para?",
    "a": [
      "planejar, avaliar processos e alinhar o trabalho",
      "substituir todo registro",
      "punir usuários",
      "eliminar articulação em rede"
    ],
    "correct": 0,
    "explain": "O edital inclui reuniões para planejamento e avaliação."
  },
  {
    "id": 235,
    "subject": "Orientador Social",
    "topic": "ECA – Lei nº 8.069/1990",
    "difficulty": "Fácil",
    "q": "O Conselho Tutelar atua na garantia dos direitos de?",
    "a": [
      "crianças e adolescentes",
      "somente idosos",
      "somente pessoas com deficiência",
      "apenas trabalhadores"
    ],
    "correct": 0,
    "explain": "O Conselho Tutelar é voltado à proteção dos direitos da criança e do adolescente."
  },
  {
    "id": 236,
    "subject": "Orientador Social",
    "topic": "Estatuto do Idoso",
    "difficulty": "Médio",
    "q": "Envelhecimento deve ser compreendido como?",
    "a": [
      "direito personalíssimo e sua proteção como direito social",
      "motivo automático de incapacidade",
      "razão para isolamento",
      "impedimento de participação social"
    ],
    "correct": 0,
    "explain": "A legislação protege dignidade, autonomia e participação da pessoa idosa."
  },
  {
    "id": 287,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Médio",
    "q": "Em “João, o diretor, chegou cedo”, “o diretor” funciona como?",
    "a": [
      "aposto",
      "vocativo",
      "objeto direto",
      "predicado"
    ],
    "correct": 0,
    "explain": "O termo explica ou renomeia “João”, funcionando como aposto."
  },
  {
    "id": 288,
    "subject": "Português",
    "topic": "Classes de palavras",
    "difficulty": "Médio",
    "q": "Em “A prova está muito difícil”, “muito” é?",
    "a": [
      "advérbio",
      "artigo",
      "preposição",
      "conjunção"
    ],
    "correct": 0,
    "explain": "“Muito” intensifica o adjetivo “difícil”, funcionando como advérbio."
  },
  {
    "id": 289,
    "subject": "Português",
    "topic": "Interpretação de textos",
    "difficulty": "Médio",
    "q": "Uma informação implícita é aquela que?",
    "a": [
      "pode ser inferida a partir do texto",
      "aparece necessariamente com as mesmas palavras",
      "não tem relação com o texto",
      "é sempre opinião do leitor"
    ],
    "correct": 0,
    "explain": "Informações implícitas são construídas por inferência a partir de pistas textuais."
  },
  {
    "id": 290,
    "subject": "Matemática",
    "topic": "Números racionais",
    "difficulty": "Fácil",
    "q": "Quanto é 3/5 de 100?",
    "a": [
      "60",
      "20",
      "40",
      "80"
    ],
    "correct": 0,
    "explain": "3/5 de 100 é 60."
  },
  {
    "id": 291,
    "subject": "Matemática",
    "topic": "Expressões algébricas",
    "difficulty": "Médio",
    "q": "Se x=4, quanto vale 2x²+1?",
    "a": [
      "33",
      "17",
      "25",
      "9"
    ],
    "correct": 0,
    "explain": "2·16+1=33."
  },
  {
    "id": 292,
    "subject": "Matemática",
    "topic": "Regra de três simples",
    "difficulty": "Fácil",
    "q": "Se 5 canetas custam R$ 25, quanto custam 8 pelo mesmo preço unitário?",
    "a": [
      "R$ 40",
      "R$ 30",
      "R$ 35",
      "R$ 45"
    ],
    "correct": 0,
    "explain": "Cada caneta custa R$ 5; 8 custam R$ 40."
  },
  {
    "id": 293,
    "subject": "Matemática",
    "topic": "Função de 1º grau",
    "difficulty": "Fácil",
    "q": "Na função f(x)=3x-2, f(2)=?",
    "a": [
      "4",
      "6",
      "8",
      "2"
    ],
    "correct": 0,
    "explain": "3·2-2=4."
  },
  {
    "id": 294,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Princípios e diretrizes do SUS",
    "difficulty": "Médio",
    "q": "A participação da comunidade é relacionada a?",
    "a": [
      "controle social do SUS",
      "privatização dos serviços",
      "exclusão dos usuários",
      "atendimento somente hospitalar"
    ],
    "correct": 0,
    "explain": "A participação da comunidade é uma diretriz do SUS e se relaciona ao controle social."
  },
  {
    "id": 295,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Visita domiciliar",
    "difficulty": "Fácil",
    "q": "Ao identificar uma situação de risco que exige atuação da equipe, o ACS deve?",
    "a": [
      "comunicar a equipe conforme os fluxos de trabalho",
      "ocultar a informação",
      "publicar nas redes sociais",
      "resolver sozinho fora de sua competência"
    ],
    "correct": 0,
    "explain": "O ACS deve manter a equipe informada, especialmente diante de situações de risco."
  },
  {
    "id": 296,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Vacinação",
    "difficulty": "Fácil",
    "q": "O registro de vacinação é importante porque?",
    "a": [
      "permite acompanhar o histórico e orientar a continuidade do esquema",
      "substitui o calendário oficial",
      "dispensa qualquer acompanhamento",
      "serve apenas para estatística sem uso assistencial"
    ],
    "correct": 0,
    "explain": "O registro permite acompanhar o histórico vacinal e orientar o cuidado."
  },
  {
    "id": 297,
    "subject": "Agente Comunitário de Saúde",
    "topic": "Doenças transmissíveis",
    "difficulty": "Difícil",
    "q": "A cadeia de transmissão pode ser reduzida por medidas que atuem?",
    "a": [
      "sobre fontes, vias de transmissão e/ou suscetíveis, conforme o agravo",
      "somente sobre hospitais",
      "apenas sobre alimentação",
      "somente após o fim do surto"
    ],
    "correct": 0,
    "explain": "As medidas dependem do agravo e podem atuar em diferentes elos da cadeia."
  },
  {
    "id": 298,
    "subject": "Orientador Social",
    "topic": "SUAS",
    "difficulty": "Fácil",
    "q": "A assistência social, no modelo do SUAS, busca garantir?",
    "a": [
      "proteção social e acesso a direitos",
      "punição por vulnerabilidade",
      "exclusão territorial",
      "atendimento apenas mediante pagamento"
    ],
    "correct": 0,
    "explain": "O SUAS organiza a proteção social e o acesso a direitos socioassistenciais."
  },
  {
    "id": 299,
    "subject": "Orientador Social",
    "topic": "Garantia de direitos",
    "difficulty": "Médio",
    "q": "Ao identificar possível violação de direitos, o orientador deve?",
    "a": [
      "seguir os fluxos da rede e comunicar à equipe responsável",
      "ignorar a situação",
      "expor o caso publicamente",
      "prometer solução individual"
    ],
    "correct": 0,
    "explain": "Situações de violação devem ser encaminhadas pelos fluxos e pela rede competente."
  },
  {
    "id": 300,
    "subject": "Orientador Social",
    "topic": "Fortalecimento de vínculos",
    "difficulty": "Fácil",
    "q": "Uma atividade de convivência deve buscar?",
    "a": [
      "participação e fortalecimento de vínculos comunitários",
      "isolamento dos participantes",
      "competição obrigatória",
      "restrição de participação"
    ],
    "correct": 0,
    "explain": "A convivência e socialização são voltadas ao fortalecimento de vínculos."
  }
];
