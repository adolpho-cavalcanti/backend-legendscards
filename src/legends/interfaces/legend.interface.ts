import { Document } from 'mongoose';

export interface Legend extends Document {
    nome: string;
    posicao: string;
    imagem: string;
    nacionalidade: string;
    melhorDoMundo: number;
    titulos: Array<Trophy>;
}

interface Trophy {
    nome: string,
    imagem: string
    peso: number
    qtdTitulos: number
}