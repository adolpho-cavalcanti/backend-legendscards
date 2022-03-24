import * as mongoose from 'mongoose';

export const LegendSchema = new mongoose.Schema({
    nome: { type: String, index: true },
    posicao: { type: String },
    imagem: { type: String },
    nacionalidade: { type: String },
    melhorDoMundo: { type: Number },
    // video: { type: String },
    titulos: [
        { 
            nome: { type: String },
            imagem: { type: String },
            peso: { type: Number },
            qtdTitulos: { type: Number },
        }
    ]
}, {timestamps: true, collection: 'legends'})