export interface BriefingData {
  // Seção 1 - Identidade e história da família
  moradores: string;
  visitasFrequentes: {
    existem: boolean;
    perfil: string[];
    frequencia: string;
  };
  valores: string[];
  momentosMarcantes: {
    primeiro: string;
    segundo: string;
    terceiro: string;
  };
  objetosAfeto: string;
  tradicoes: string[];
  linguagemFamilia: string;
  primeiroAniversario: {
    primeiroDia: string;
    aniversarioUmAno: string;
  };

  // Seção 2 - Estilo de vida e rotina
  rotinaHobbies: {
    rotina: string;
    hobbies: string[];
  };
  pets: {
    possui: boolean;
    quantidade: string;
    necessidades: string;
  };
  convivenciaSocial: {
    perfil: string;
    frequencia: string;
    espacos: string;
  };
  privacidade: {
    social: string;
    intimo: string;
    servico: string;
  };
  formalidade: string;

  // Seção 3 - Terreno e entorno
  localizacao: {
    endereco: string;
    regras: boolean;
    descricaoRegras: string;
  };
  documentos: string[];
  caracteristicasLote: {
    medidas: string;
    orientacaoSolar: string[];
    vistas: string;
    ruidosVentos: string;
  };
  contextoLocal: string;
  infraestrutura: string[];
  acessoMobilidade: string;

  // Seção 4 - Objetivos do projeto
  problemaAtual: string;
  naoNegociaveis: string[];
  desejosNegociaveis: string[];
  prioridades: Record<string, number>;

  // Observações gerais para cada seção
  observacoes: Record<string, string>;
}