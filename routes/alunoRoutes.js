const express = require('express');
const{ getAlunos, getAlunoById, createAluno, updateAluno, deleteAluno} = require('../controllers/alunoController');
const router = express.Router();

router.route('/students').get(getAlunos).post(createAluno);
router.route('/students/:id').get(getAlunoById).put(updateAluno).delete(deleteAluno);

module.exports = router;