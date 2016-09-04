angular.module("doacao-de-sangue").controller("doadorController",
    function ($scope,
        $location,
        $rootScope,
        doadorAPI,
        segurancaAPI) {

        //*** Vari�veis

        $rootScope.origem = "DOA";

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

        //M�todo respons�vel por criar o doador.
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

            carregaDoadorCPF();
        }

        //M�todo respons�vel por obter o doador por cpf.
        function carregaDoadorCPF() {

            doadorAPI.getDoadorCpf($rootScope.doadorCpf).success(function (data) {

                criaUsuarioSenha(data.Id);

            }).error(function (data) {

                alert("Fun��o temporariamente indispon�vel!")
            });

        }

        //M�todo respons�vel por criar o usu�rio e senha.
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
                alert("Fun��o temporariamente indispon�vel!")
            });

        }

        //M�todo respons�vel por voltar para a tela anterior.
        function voltar() {

            $location.path("/defaultDoador");

        }

    });