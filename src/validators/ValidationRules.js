const { body } = require("express-validator");

const ValidationRules = () => {
  return [
    body("nome").notEmpty().withMessage("Nome não enviado"),
    body("tamanhoCintura").not().isIn([0]).withMessage("tamanhoCintura não pode ser 0"),
    body("quadril").not().isIn([0]).withMessage("quadril não pode ser 0"),
    body("sexo").isIn(['F', 'f', 'M', 'm']).withMessage("opcao invalida em sexo"),
  ];
};

module.exports = {
  ValidationRules,
};
