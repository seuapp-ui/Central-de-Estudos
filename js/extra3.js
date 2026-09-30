// v4.1.4: mais questões para tópicos com pouca cobertura
(function(){
const P='Português',M='Matemática';
let id=343;const Q=(s,t,d,q,a,e)=>QUESTIONS.push({id:id++,subject:s,topic:t,difficulty:d,q,a,correct:0,explain:e});
Q(P,'Flexão nominal','Fácil','O plural de “cidadão” é:',['cidadãos','cidadões','cidadães','cidadãoes'],'Cidadão → cidadãos.');
Q(P,'Flexão nominal','Fácil','O plural de “pão” é:',['pães','pãos','pões','pãoes'],'Pão → pães.');
Q(P,'Concordância nominal','Médio','Qual frase está correta?',['É proibida a entrada.','É proibido a entrada.','São proibido a entrada.','É proibidos a entrada.'],'Com artigo, “proibido” concorda com “entrada”.');
Q(P,'Flexão verbal','Fácil','“Nós estudaremos” está no:',['futuro do presente','presente','pretérito perfeito','pretérito imperfeito'],'Terminação -remos indica futuro do presente.');
Q(P,'Formação de palavras','Médio','“Guarda-chuva” é formada por:',['composição por justaposição','derivação prefixal','derivação sufixal','abreviação'],'Duas palavras unidas por hífen, sem perder a forma.');
Q(P,'Estrutura da oração','Médio','Em “Os alunos fizeram a prova”, o núcleo do sujeito é:',['alunos','fizeram','prova','os'],'O núcleo do sujeito é “alunos”.');
Q(P,'Coordenação e subordinação','Fácil','Em “Estudei, mas não passei”, “mas” indica:',['oposição','adição','conclusão','causa'],'Conjunção adversativa.');
Q(P,'Recursos linguísticos','Médio','“Seus olhos são duas estrelas” é exemplo de:',['metáfora','comparação','ironia','eufemismo'],'Metáfora: comparação implícita, sem conectivo.');
Q(P,'Ortografia','Fácil','Assinale a grafia correta:',['obsessão','obcessão','obisessão','ovsessão'],'Obsessão, com ss.');
Q(M,'Propriedades','Fácil','O valor de 5⁶ ÷ 5² em forma de potência é:',['5⁴','5³','5⁸','1⁴'],'Mesma base: subtrai os expoentes.');
Q(M,'Propriedades','Médio','O valor de (3²)³ em forma de potência é:',['3⁶','3⁵','3⁸','3⁹'],'Potência de potência: multiplica os expoentes.');
Q(M,'Problemas','Médio','Ana tem o triplo da idade de Bia e juntas somam 24 anos. A idade de Bia é:',['6','8','12','18'],'x + 3x = 24, então x = 6.');
Q(M,'Relação e função','Fácil','Se f(x) = 3x − 2, então f(4) é:',['10','14','12','6'],'3·4 − 2 = 10.');
Q('Agente Comunitário de Saúde','Epidemiologia','Fácil','Endemia é:',['presença habitual de uma doença em uma região','aumento súbito de casos em local restrito','doença em vários continentes','ausência de casos'],'Endemia é a ocorrência constante em determinada área.');
Q('Orientador Social','ECA – Lei nº 8.069/1990','Fácil','Segundo o ECA, criança é a pessoa com até:',['12 anos incompletos','14 anos','10 anos','18 anos'],'Criança: até 12 anos incompletos.');
Q('Orientador Social','Estatuto do Idoso','Fácil','A idade mínima para ser considerada pessoa idosa é:',['60 anos','55 anos','65 anos','70 anos'],'Idoso: 60 anos ou mais.');
Q('Orientador Social','Garantia de direitos','Fácil','Garantir direitos significa:',['assegurar acesso e proteção','conceder favores','restringir serviços','impedir encaminhamentos'],'Direito não é favor.');
})();
