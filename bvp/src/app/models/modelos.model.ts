export interface modelloresults {
    modelos: Modelo[]
    anos: Ano[]
}

export interface Modelo {
    codigo: number
    nome: string
}

export interface Ano {
    codigo: string
    nome: string
}
