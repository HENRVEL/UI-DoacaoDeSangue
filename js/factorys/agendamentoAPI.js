angular.module("doacao-de-sangue").factory("agendamentoAPI", function ($http) {

    // 
    var _saveAgendamento= function (agendamentoDoador) {
        return $http.post("http://localhost:56029/api/AgendamentoDoadores", agendamentoDoador);
    };

   
    //Retorno
    return {
        saveAgendamento: _saveAgendamento
    };

});