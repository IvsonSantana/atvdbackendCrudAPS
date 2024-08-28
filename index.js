const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/database');
const alunoRoutes = require('./routes/alunoRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/alunos', alunoRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor está rodando na Porta ${PORT}`);
});
