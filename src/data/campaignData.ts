export interface Specialist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface StudentParticipant {
  id: string;
  name: string;
  role: string;
  group: string;
  placeholderDescription: string;
  image?: string;
}

export interface MythTruthItem {
  id: string;
  statement: string;
  isMyth: boolean;
  verdictLabel: string;
  explanation: string;
  tag: string;
}

export interface SelfExamStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  tip: string;
}

export const SPECIALISTS: Specialist[] = [
  {
    id: 'gislaine-souza',
    name: 'Gislaine Teixeira Soares Souza',
    role: 'Enfermeira e Professora de Medicina (PUC Goiás)',
    image: '/images/participantes/gislaine-souza.jpeg',
  },
  {
    id: 'monica-strege',
    name: 'Monica Strege',
    role: 'Doutora em Educação, Escritora e Voluntária (Oncoguia)',
    image: '/images/participantes/monica-strege.jpeg',
  },
  {
    id: 'vera-lucia',
    name: 'Vera Lucia dos Santos',
    role: 'Assistente Social e Professora de Medicina (PUC Goiás)',
    image: '/images/participantes/vera-lucia.jpeg',
  },
];

export const STUDENT_PARTICIPANTS: StudentParticipant[] = [
  {
    id: 'ana-marcia',
    name: 'Ana Márcia',
    role: 'Estratégia e Organização',
    group: 'Estratégia',
    image: '/images/participantes/ana-marcia.jpeg',
    placeholderDescription:
      'Planejamento estratégico e programação de conscientização.',
  },
  {
    id: 'prof-janaina',
    name: 'Professora Janaína',
    role: 'Docente Orientadora',
    group: 'Orientação',
    placeholderDescription:
      'Orientação pedagógica, articulação e mobilização comunitária.',
  },
  {
    id: 'kelly',
    name: 'Kelly',
    role: 'Estratégia e Organização',
    group: 'Estratégia',
    placeholderDescription:
      'Coordenação de objetivos, cronograma e ambientação da campanha.',
  },
  {
    id: 'patricia',
    name: 'Patrícia',
    role: 'Estratégia e Organização',
    group: 'Estratégia',
    placeholderDescription:
      'Organização logística e dinâmicas de conscientização.',
  },
  {
    id: 'lorena',
    name: 'Lorena',
    role: 'Identidade Visual e Criação',
    group: 'Criação',
    placeholderDescription:
      'Direção de arte e materiais sobre diagnóstico precoce.',
  },
  {
    id: 'wanessa',
    name: 'Wanessa',
    role: 'Identidade Visual e Criação',
    group: 'Criação',
    placeholderDescription:
      'Criação de identidade visual, cartazes e comunicação digital.',
  },
  {
    id: 'ivone',
    name: 'Ivone',
    role: 'Divulgação e Comunicação',
    group: 'Comunicação',
    placeholderDescription:
      'Comunicação educativa, mobilização e acolhimento de convidados.',
  },
  {
    id: 'michelle',
    name: 'Michelle',
    role: 'Divulgação e Comunicação',
    group: 'Comunicação',
    placeholderDescription:
      'Articulação de parcerias e engajamento comunitário.',
  },
  {
    id: 'ana-luiza',
    name: 'Ana Luíza',
    role: 'Divulgação e Comunicação',
    group: 'Comunicação',
    placeholderDescription:
      'Mobilização da comunidade e programação de atividades.',
  },
];

export const SELF_EXAM_STEPS: SelfExamStep[] = [
  {
    stepNumber: '01',
    title: 'Inspeção em frente ao espelho',
    subtitle: 'Observação visual com os braços em diferentes posições',
    description:
      'Em frente ao espelho, observe as mamas com os braços relaxados, depois com as mãos na cintura e, por fim, elevando os braços acima da cabeça. Avalie o contorno, a simetria e a superfície da pele.',
    tip: 'Idealmente realizado uma vez por mês, alguns dias após o término do período menstrual.',
  },
  {
    stepNumber: '02',
    title: 'Toque suave com as pontas dos dedos',
    subtitle: 'Sensibilidade tátil com os dedos unidos',
    description:
      'Use a polpa dos três dedos médios unidos — nunca as unhas ou movimento de pinça. Aplique pressão leve a moderada para sentir diferentes profundidades do tecido mamário.',
    tip: 'Durante o banho, a pele ensaboada facilita o deslizamento suave dos dedos.',
  },
  {
    stepNumber: '03',
    title: 'Verificação das mamas e axilas',
    subtitle: 'Debaixo do braço direito e do braço esquerdo',
    description:
      'Com um braço atrás da nuca, examine toda a mama correspondente e estenda a palpação até a axila e a região próxima à clavícula, verificando a presença de nódulos.',
    tip: 'Deitar-se com uma toalha dobrada sob o ombro espalha o tecido mamário de forma uniforme.',
  },
  {
    stepNumber: '04',
    title: 'Palpação na faixa vertical',
    subtitle: 'Movimentos ascendentes e descendentes',
    description:
      'Percorra a mama em linhas verticais paralelas — subindo e descendo desde a base das costelas até a clavícula, cobrindo da lateral externa até o centro do peito.',
    tip: 'Mantenha um padrão contínuo para que nenhuma área deixe de ser examinada.',
  },
  {
    stepNumber: '05',
    title: 'Exploração no sentido horário',
    subtitle: 'Círculos concêntricos ao redor da mama e aréola',
    description:
      'Faça movimentos circulares no sentido horário, começando pela borda externa da mama e avançando em espiral até o mamilo. Observe também se há saída espontânea de líquido.',
    tip: 'O autoexame promove o autoconhecimento, mas não substitui o exame clínico e a mamografia.',
  },
];

export const WARNING_SIGNS: string[] = [
  'Caroço ou nódulo endurecido na mama ou na axila, especialmente se persistente;',
  'Alterações na pele, como vermelhidão, retração ou aspecto de "casca de laranja";',
  'Mudanças recentes no formato, posição ou inversão do mamilo;',
  'Secreção espontânea de líquido pelo mamilo (cristalino ou sanguinolento);',
  'Aumento progressivo do volume de uma das mamas ou inchaço na axila/pescoço.',
];

export const MYTHS_AND_TRUTHS: MythTruthItem[] = [
  {
    id: 'mito-1',
    statement: '“O câncer de mama acontece exclusivamente em mulheres.”',
    isMyth: true,
    verdictLabel: 'MITO — Homens também precisam de atenção',
    explanation:
      'Homens também possuem tecido mamário e representam cerca de 1% dos casos. Nódulos unilaterais persistentes, especialmente após os 50 anos, devem ser investigados.',
    tag: 'Epidemiologia',
  },
  {
    id: 'mito-2',
    statement: '“Se não sinto dor nem caroço, não preciso fazer exames preventivos.”',
    isMyth: true,
    verdictLabel: 'MITO — O rastreamento busca sinais invisíveis ao toque',
    explanation:
      'Na fase inicial — quando as chances de cura são máximas — o câncer de mama costuma ser silencioso. A mamografia identifica alterações antes que se tornem palpáveis.',
    tag: 'Rastreamento SUS',
  },
  {
    id: 'mito-3',
    statement: '“Encontrar um nódulo ou caroço na mama significa que é câncer.”',
    isMyth: true,
    verdictLabel: 'MITO — A maioria das alterações mamárias é benigna',
    explanation:
      'Cistos simples e fibroadenomas são benignos e frequentes. Contudo, todo nódulo novo ou persistente exige avaliação médica presencial para diagnóstico seguro.',
    tag: 'Diagnóstico Clínico',
  },
  {
    id: 'mito-4',
    statement: '“Fazer o autoexame todos os meses substitui a mamografia.”',
    isMyth: true,
    verdictLabel: 'MITO — Autoconhecimento e mamografia são complementares',
    explanation:
      'Conhecer o próprio corpo ajuda a notar mudanças entre consultas, mas não substitui a avaliação clínica profissional nem a mamografia nas idades recomendadas.',
    tag: 'Prevenção Combinada',
  },
  {
    id: 'mito-5',
    statement: '“Quem tem histórico familiar certamente terá câncer de mama.”',
    isMyth: true,
    verdictLabel: 'MITO — Histórico eleva o risco, mas não é sentença',
    explanation:
      'Apenas uma parcela menor dos casos é hereditária. Hábitos saudáveis, controle do peso e acompanhamento médico reduzem significativamente os riscos.',
    tag: 'Fatores de Risco',
  },
];
