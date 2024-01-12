const express = require('express');
const router = express.Router();
//Pegando a entidade usando .Date
const Date = require('../models').Date;

//Buscar TODOS OS Dates (GET)
router.get('/', async (req, res) => {
const dates = await Date.findAll();
res.status(200).json(dates);
});

//Cadastrar Date no banco (POST)
router.post('/', async (req, res) => {
const {titulo, endereco, custo, encontro_duplo, em_casa, agendamento, descricao} = req.body;
const newEdit = await Date.create({titulo, endereco, custo, encontro_duplo, em_casa, agendamento, descricao})
res.status(200).json({message: 'Cadastrado com sucesso!'});
});

//Buscar por id do date (GET)
router.get('/:id', async (req, res) => {
const id=req.params;
const date = await Date.findByPk(req.params.id);
res.status(200).json(date);
});

//Deleta um date por id (DELETE)
router.delete('/:id', async (req, res) =>{
await Date.destroy({
where:{
id: req.params.id,
},
});
res.status(200).json({message:'Excluído com sucesso!'})
});

//Altera Date por ID (PUT)
router.put('/:id', async (req, res) =>{
const {em_casa, descricao} = req.body;
await Date.update(
{em_casa, descricao, encontro_duplo},
{
where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso!'});
});
module.exports=router;