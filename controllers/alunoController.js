const Aluno = require('../models/Aluno');

exports.getAlunos = async (req, res) => {
    try{
        const alunos = await Alunos.find();
        res.json(alunos);
    } catch (err){
        res.status(500).json({message: err.message });
    }

};

exports.getAlunoById = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);
        if(!aluno){
            return res.status(404).json({ message: 'Aluno não Encontrado'});
        }
        res.json(aluno); 
    } catch (err){
        res.status(500).json({ message: err.message});
    }
};

exports.createAluno = async (req, res) => {
    const{ nome, email, idade, numeroMatricula} = req.body;
    try{
        const aluno = new Aluno({
         nome,
         email,
         idade,
         numeroMatricula   
        });
        await aluno.save()
        res.status(201).json(aluno);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }

};

exports.updateAluno = async (req, res) => {
    try {
      const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
      res.json(aluno);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.deleteAluno = async (req, res) =>{
    try{
        const aluno = await Aluno.findByIdAndDelete(req.params.id);
        if(!aluno){
            return res.status(404).json({ message: 'User not found'});
        }
        res.json({ message: 'Usuario deletado'});
    }catch (err){
        res.status(500).json({ message: err.messge});
    }
  }