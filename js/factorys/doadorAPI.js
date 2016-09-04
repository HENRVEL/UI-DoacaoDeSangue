angular.module("doacao-de-sangue").factory("doadorAPI", function ($http) {

    // Obtem o doador pelo id.
    var _getDoadorId = function (id) {
        return $http.get("http://localhost:56029/api/doadores/" + id);
    };


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
        getDoadorId: _getDoadorId,
        getDoadorCpf: _getDoadorCpf,
        criarDoador: _criarDoador
    };

});