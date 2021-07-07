module.exports.validaRegras = (doador) => {
    var retorno
    if(doador.valorDoacao == 10){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 10% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(doador.valorDoacao == 20){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 20% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(doador.valorDoacao == 50){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 30% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(doador.valorDoacao >= 100){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 50% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else{
        retorno = {
            "Error":"Valor deve ser igual a 10, 20, 50 ou acima de 100",
            "Valor informado":`${doador.valorDoacao}`
        }
    }
    return retorno
};


module.exports.brinde = (doador) => {
    var a = ""
    return a.concat(Math.floor(Math.random() * 9999) + 1001,doador.CPF,Math.floor(Math.random() * 99999) + 10000); 
}