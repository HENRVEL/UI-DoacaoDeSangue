angular.module("doacao-de-sangue").factory("laboratoriosAPI", function ($http) {

    // Obtem os laborátorios conveniados
    var _getLabotarotios = function(){
        return $http.get("http://localhost:56027/api/LaboratoriosConveniado");
    };

    // Obtem os laborátorios conveniados pela identificação.
    var _getAgendaLabotarotios = function (id) {
        return $http.get("http://localhost:56029/api/AgendaLaboratorio/"+ id);
    };
    
    //Retorno
    return {
        getLabotarotios: _getLabotarotios,
        getAgendaLabotarotios: _getAgendaLabotarotios
    };



});