export type HeroVariant = "a1" | "a2" | "a3";

export const heroVariants: Record<
  HeroVariant,
  {
    category: string;
    title: string;
    support: string;
    button: string;
  }
> = {
  a1: {
    category: "Laboratório de PIVE",
    title: "Talvez R$500 mil nunca tenha sido o seu problema.",
    support:
      "Em uma imersão ao vivo de 8 horas, Cassiano Filho mostra como pensar uma estrutura de PIVE enxuta, quais equipamentos realmente entram na conta e como transformar um sonho caro demais em um plano de negócio possível.",
    button: "Quero ver o plano por R$99",
  },
  a2: {
    category: "Curso presencial",
    title: "Você aprende numa Ferrari. Depois volta para casa a pé.",
    support:
      "O problema de muitos cursos de PIVE não é a aula. É terminar a semana sem estrutura, sem prática contínua e sem um caminho que caiba na sua realidade. Nesta aula, você vai entender a lógica oposta.",
    button: "Quero entender o caminho",
  },
  a3: {
    category: "Mercado de embriões",
    title: "Tem fazenda querendo genética. Falta laboratório chegando até ela.",
    support:
      "Pequenos e médios pecuaristas, regiões distantes dos grandes centros e produtores que não entram na agenda das grandes operações criam um espaço que muita gente ainda não percebeu. Cassiano vai mostrar como enxergar esse jogo.",
    button: "Quero ver essa oportunidade",
  },
};

export const discoveries = [
  "Quais equipamentos mínimos realmente entram numa estrutura enxuta de PIVE.",
  "Como separar um mini laboratório de treino de uma estrutura comercial de baixo custo.",
  "Onde o dinheiro costuma ser desperdiçado quando alguém copia um laboratório tradicional.",
  "Como funciona a lógica do Sistema de Incubação Submarino, o SIS.",
  "Quais caminhos existem para regularizar um laboratório junto ao MAPA.",
  "Como pensar parcerias com veterinários de campo, fazendas de genética e produtores.",
  "Onde está a margem do negócio e como avaliar a viabilidade antes de investir.",
  "Por que pequenos e médios produtores podem representar um espaço fora da disputa das grandes operações.",
];

export const lessons = [
  {
    title: "A história que enterrou o sonho",
    text: "Por que a PIVE ficou associada a investimento alto e aprendizado demorado.",
  },
  {
    title: "O básico que precisa fazer sentido",
    text: "Uma visão geral da produção in vitro de embriões e da estrutura mínima.",
  },
  {
    title: "O que realmente custa",
    text: "Equipamentos, estrutura experimental, estrutura comercial e gastos que podem ser evitados.",
  },
  {
    title: "A lógica do SIS",
    text: "Como o sistema muda a incubação e reduz a dependência de equipamentos tradicionais.",
  },
  {
    title: "O laboratório no mundo real",
    text: "Regularização, rotina, parcerias e acesso a clientes.",
  },
  {
    title: "O modelo de negócio",
    text: "Onde existe demanda, como pensar margem e como evitar disputar somente os mesmos clientes.",
  },
  {
    title: "O próximo passo",
    text: "O que ainda falta para sair da viabilidade e chegar à produção com acompanhamento.",
  },
];

export const faqs = [
  {
    question: "Eu vou aprender a produzir embriões nesta aula?",
    answer:
      "Você vai entender a estrutura, o processo, a viabilidade e o modelo de negócio. A produção prática completa exige treinamento e acompanhamento, que pertencem à etapa seguinte da jornada.",
  },
  {
    question: "Preciso já ter experiência com PIVE?",
    answer:
      "Não. A aula organiza o raciocínio desde a base e foi pensada também para quem olha para a área de fora e quer entender como entrar.",
  },
  {
    question: "Preciso ter um laboratório pronto?",
    answer:
      "Não. A proposta é entender quais estruturas existem, o que é realmente necessário e como pensar um laboratório enxuto antes de investir.",
  },
  {
    question: "Essa aula serve para pecuarista que não é veterinário?",
    answer:
      "Sim, quando o objetivo é entender a viabilidade de ter ou estruturar uma operação de PIVE na fazenda. A execução técnica deve respeitar as exigências profissionais e regulatórias aplicáveis.",
  },
  {
    question: "O método funciona somente em grandes cidades?",
    answer:
      "A lógica do laboratório enxuto nasceu em uma realidade distante dos grandes centros. A viabilidade concreta depende da estrutura local, da operação e das exigências regulatórias.",
  },
  {
    question: "Quanto custa um laboratório depois?",
    answer:
      "Cassiano mostra na aula as diferenças entre uma estrutura experimental enxuta e uma estrutura comercial, além dos equipamentos que mais pesam na conta. O objetivo é permitir que você avalie sua realidade antes de investir.",
  },
  {
    question: "E se eu decidir que quero produzir de verdade?",
    answer:
      "No final da aula, Cassiano apresenta a continuidade para quem quiser sair do plano e entrar na execução acompanhada, com aulas, equipamentos, protocolos e encontros individuais.",
  },
];
