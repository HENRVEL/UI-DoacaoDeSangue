angular.module("doacao-de-sangue").factory("segurancaAPI", function ($http) {


    // Válida  o usuário e senha digitada.   
    var _validaUsuarioSenha = function (usuario, tipoUsuario, senha) {
        return $http.get("http://localhost:59246/api/seguranca/", usuario + "/" + tipoUsuario + "/" + senha);
    };


    // Cria o Doador.
    var _criaUsuarioSenha = function (seguranca) {
        return $http.post("http://localhost:59246/api/seguranca/", seguranca);
    };


    //Retorno
    return {
        validaUsuarioSenha: _validaUsuarioSenha,
        criaUsuarioSenha: _criaUsuarioSenha
    };

});