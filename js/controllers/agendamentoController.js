angular.module("doacao-de-sangue").controller("agendamentoController",
    function ($scope,
        $location,
        $rootScope,
        laboratoriosAPI,
        agendamentoAPI,
        doadorAPI) {

        //***Variaveis:
        $scope.agendaEscolhida = {};


        //*** Inicialização dos Métodos
        $scope.carregaLaboratorios = carregaLaboratorios;
        $scope.carregaAgendaLaboradorio = carregaAgendaLaboradorio;
        $scope.criarAgenda = criarAgenda;
        $scope.carregaDoadorCPF = carregaDoadorCPF;
        $scope.cpf = $rootScope.doadorCpf;

        //Inicio:
        carregaDoadorCPF();
        carregaLaboratorios();

        //*** Métodos:
        //Método responsável por obter o doador por cpf.
        function carregaDoadorCPF() {
            doadorAPI.getDoadorCpf($scope.cpf).success(function (data) {
                $scope.IdDoador = data.Id;

            }).error(function (data) {
                alert("Função temporariamente indisponível!")
            });

        }

        //Método responsável por carregar a lista de laboratórios.
        function carregaLaboratorios() {

            laboratoriosAPI.getLabotarotios().success(function (data) {
                $scope.listaLaboratorios = data;

            }).error(function (data) {
                alert("Função temporariamente indisponível!")
            });
        };


        //Método responsável por carregar a lista de agenda de laboratório.
        function carregaAgendaLaboradorio() {

            var idLaboratorio = $scope.laboratorio.Id;

            laboratoriosAPI.getAgendaLabotarotios(idLaboratorio).success(function (data) {
                $scope.listaAgendaLaboradorio = data;

            }).error(function (data) {
                alert("Função temporariamente indisponível!")
            });

        };

        //Método responsável por criar a agenda do doador.
        function criarAgenda() {

            var agenda = $scope.agendaEscolhida;

            var objAgendamentoDoador = {
                IdLaboratorio: agenda.IdLaboratorio,
                IdDoador: $scope.IdDoador,
                IdAgendaLaboratorio: agenda.Id,
                Cancelado: false,
                MotivoCancelamento: null
            };

            agendamentoAPI.saveAgendamento(objAgendamentoDoador).success(function (data) {
                alert(data);
                $location.path("/defaultDoador");

            }).error(function (data) {
                alert(data);
            });

        }

    });