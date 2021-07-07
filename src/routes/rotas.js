const { Router, request } = require("express");
const { validate } = require("../Validators/validators");
const { ValidationRules } = require("../validators/ValidationRules");
const Service = require("../services/service");

const routes = Router();

routes.post("/",  ValidationRules(), validate, (request, response) => {
  const {nome, tamanhoCintura, quadril, sexo} = request.body;
  const pessoa = {nome, tamanhoCintura, quadril, sexo};
  
  const retornoCalculo = Service.calcular(pessoa);
  
  return response.status(200).json({ retornoCalculo });
});

module.exports = routes;