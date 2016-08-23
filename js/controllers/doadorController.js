angular.module("doacao-de-sangue").controller("doadorController", function ($scope, $location, $rootScope, doadorAPI) {


    //*** Vari�veis
    
    $scope.doador = {
        sexo: "M",
        tipoSanguineo: "O",
        fatorRH: "P",
        pDoador: "N"

    };

    //*** Inicializa��o dos M�todos:
    $scope.cadastrarDoador = cadastrarDoador;
    $scope.cadastrarloginDoador = cadastrarloginDoador;
    $scope.voltar = voltar;

    //*** M�todos:
    function cadastrarDoador() {
        
        doadorAPI.criarDoador($scope.doador).success(function (data) {
            alert(data);

            $rootScope.doadorCpf = $scope.doador.cpf;

            $location.path("/cadastroLogin");

        }).error(function (data) {
            alert("Fun��o temporariamente indispon�vel!")
        });
    }


    function cadastrarloginDoador() {
        
        $location.path("/novoAgendamento");
       
    }

    function voltar() {

        $location.path("/defaultDoador");

    }
    
  


});