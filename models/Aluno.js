const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    numeroMatricula:{
        type: Number,
        required: true
    },

}, {
    timestamps: true
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;