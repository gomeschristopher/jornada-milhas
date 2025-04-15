export interface Promotion {
    id: number;
    destino: string;
    preco: number;
    imagem: string;
}

export interface State {
    nome: string;
    sigla: string;
}

export interface Testimonial {
    texto: string;
    autor: string;
}

export interface User {
    name: string;
    birth: string;
    documentId: string;
    phone: string;
    email: string;
    password: string;
    city: string;
    state: State;
    gender: string;
}

export interface Search {
    data: string;
    pagina: number
    porPagina: number;
    somenteIda: boolean;
    passageirosAdultos: number;
    tipo: string;
}

export interface SearchResult {
    paginaAtual: number;
    ultimaPagina: number;
    total: number;
    precoMin: number;
    precoMax: number;
    resultado: Passage[];
}

export interface Passage {
    tipo: string;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: State;
    destino: State;
    companhia: Company;
    dataIda: Date;
    dataVolta: Date;
    total: number;
    orcamento: Budget[];
}

export interface Company {
    id: string;
    nome: string;
}

export interface Budget {
    descricao: string;
    preco: number;
    taxaEmbarque: number;
    total: number
}

export interface SearchData {
    somenteIda?: boolean;
    passageirosAdultos?: number;
    passageirosCriancas?: number;
    passageirosBebes?: number;
    tipo?: string;
    origemId?: number;
    destinoId?: number;
    precoMin?: number;
    precoMax?: number;
    conexoes?: number;
    tempoVoo?: number;
    dataIda: string;
    dataVolta?: string;
    companhiasId?: number[];
    pagina: number;
    porPagina: number;
}

export interface Featured {
  maisRapida: Passage;
  maisBarata: Passage;
  sugerida:   Passage;
}