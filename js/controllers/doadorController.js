angular.module("doacao-de-sangue").controller("doadorController", function ($scope, $location, $rootScope, doadorAPI) {


    //*** Variáveis
    
    $scope.doador = {
        sexo: "M",
        tipoSanguineo: "O",
        fatorRH: "P",
        pDoador: "N"

    };

    //*** Inicialização dos Métodos:
    $scope.cadastrarDoador = cadastrarDoador;
    $scope.cadastrarloginDoador = cadastrarloginDoador;
    $scope.voltar = voltar;

    //*** Métodos:
    function cadastrarDoador() {
        
        doadorAPI.criarDoador($scope.doador).success(function (data) {
            alert(data);

            $rootScope.doadorCpf = $scope.doador.cpf;

            $location.path("/cadastroLogin");

        }).error(function (data) {
            alert("Função temporariamente indisponível!")
        });
    }


    function cadastrarloginDoador() {
        
        $location.path("/novoAgendamento");
       
    }

    function voltar() {

        $location.path("/defaultDoador");

    }
    
  


});