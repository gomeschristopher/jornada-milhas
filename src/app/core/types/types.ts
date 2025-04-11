export interface Promotion {
    id: number;
    destino: string;
    preco: number;
    imagem: string;
}

export interface State {
    nome: string;
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