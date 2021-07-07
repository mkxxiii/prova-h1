const { Router, request } = require("express");
const { validate } = require("../Validators/validators");
const { ValidationRules } = require("../validators/ValidationRules");
const Service = require("../services/service");

const routes = Router();

routes.post("/",  ValidationRules(), validate, (request, response) => {
  const {valorDoacao, nomeInstituicao, CPF, nomeDoador} = request.body;
  const doador = {valorDoacao, nomeInstituicao, CPF, nomeDoador};
  const doadorRetorno = Service.validaRegras(doador);
  return response.status(201).json({ doadorRetorno });
});

module.exports = routes;