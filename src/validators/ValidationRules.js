const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../Validators/cpfValidator");

const ValidationRules = () => {
  return [
    body("CPF").notEmpty().withMessage("Campo cpf obrigatório"),
    body("CPF").custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF é inválido!");
      return true;
    }).withMessage("CPF inválido"),
    body("nomeDoador").notEmpty().withMessage("Campo nome obrigatório"),
    body("nomeInstituicao").notEmpty().withMessage("Campo nome instituição obrigatório"),
  ];
};

module.exports = {
  ValidationRules,
};
