angular.module("doacao-de-sangue").factory("doadorAPI", function ($http) {

    //
    var _getDoadorCpf = function (cpf) {
        return $http.get("http://localhost:56029/api/doadores/obterDoadorPorCPF/" + cpf);
    };

    // 
    var _criarDoador = function (doador) {
        return $http.post("http://localhost:56029/api/doadores/CriarDoador", doador);
    };

    //Retorno
    return {
        getDoadorCpf: _getDoadorCpf,
        criarDoador: _criarDoador
    };

});