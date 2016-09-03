angular.module("doacao-de-sangue").factory("doadorAPI", function ($http) {

    // Obtem o doador pelo CPF.
    var _getDoadorCpf = function (cpf) {
        return $http.get("http://localhost:56029/api/doadores/obterDoadorPorCPF/" + cpf);
    };

    // Cria o Doador.
    var _criarDoador = function (doador) {
        return $http.post("http://localhost:56029/api/doadores/CriarDoador", doador);
    };

    //Retorno
    return {
        getDoadorCpf: _getDoadorCpf,
        criarDoador: _criarDoador
    };

});