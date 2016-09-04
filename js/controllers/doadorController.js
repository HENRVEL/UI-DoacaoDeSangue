angular.module("doacao-de-sangue").controller("doadorController",
    function ($scope,
        $location,
        $rootScope,
        doadorAPI,
        segurancaAPI) {

        //*** Variáveis

        $rootScope.origem = "DOA";

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

        //Método responsável por criar o doador.
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

            carregaDoadorCPF();
        }

        //Método responsável por obter o doador por cpf.
        function carregaDoadorCPF() {

            doadorAPI.getDoadorCpf($rootScope.doadorCpf).success(function (data) {

                criaUsuarioSenha(data.Id);

            }).error(function (data) {

                alert("Função temporariamente indisponível!")
            });

        }

        //Método responsável por criar o usuário e senha.
        function criaUsuarioSenha(IdDoador) {

            $scope.login = {
                Usuario: $scope.loginDoador.usuario,
                Senha: $scope.loginDoador.senha,
                TipoUsuario: "DOA",
                IdDoador: IdDoador,
                IdUnidadeHospitalar: null,
                IdLaboratorio: null
            };

            segurancaAPI.criaUsuarioSenha($scope.login).success(function (data) {
                alert(data);

                $location.path("/novoAgendamento");

            }).error(function (data) {
                alert("Função temporariamente indisponível!")
            });

        }

        //Método responsável por voltar para a tela anterior.
        function voltar() {

            $location.path("/defaultDoador");

        }

    });