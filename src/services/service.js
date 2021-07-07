module.exports.calcular = (pessoa) => {
    let nome, valor, classificacao;

    valor = pessoa.tamanhoCintura / pessoa.quadril;
    nome = pessoa.nome;

    if(pessoa.sexo == "M" || pessoa.sexo == "m"){
        if(valor <= 0.95){
            classificacao = "Baixo";
        }
        else if(valor >= 0.96 && valor <= 1.00){
            classificacao = "Moderado";
        }
        else{
            classificacao = "Alto";
        }
    }
    else{
        if(valor <= 0.80){
            classificacao = "Baixo";
        }
        else if(valor >= 0.81 && valor <= 0.85){
            classificacao = "Moderado";
        }
        else{
            classificacao = "Alto";
        }
    }

    let retorno = {
        nome: nome,
        valor: valor,
        classificacao: classificacao
    }
    return retorno
};