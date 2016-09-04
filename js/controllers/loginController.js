angular.module("doacao-de-sangue").controller("loginController",
    function ($scope,
        $location,
        $rootScope,
        segurancaAPI,
        doadorAPI) {


        //*** Variáveis
        var origem = $rootScope.origem;

        //*** Inicialização dos Métodos:
        $scope.pesquisarlogin = pesquisarlogin;


        //Método responsável por válidar usuario e senha.
        function pesquisarlogin() {

            segurancaAPI.validaUsuarioSenha($scope.login.usuario, origem, $scope.login.senha).success(function (retorno) {


                var resultado = retorno.split(",");

                var idUsuario = resultado[0];
                var senhaValida = resultado[1];


                if (idUsuario == "" || senhaValida == 0) {

                    alert("Usuário ou Senha inválida!");

                } else {

                    //Origem Doador.
                    if (origem = "DOA") {
                        obtemDoadorID(idUsuario);
                    }
                }


            }).error(function (data) {
                alert("Função temporariamente indisponível!")
            });

        }

        //Método responsável por obter o doador pelo ID.
        function obtemDoadorID(id) {

            doadorAPI.getDoadorId(id).success(function (data) {

                $rootScope.doadorCpf = data.CPF;

                $location.path("/novoAgendamento");

            }).error(function (data) {

                console.log(data);
                alert("Função temporariamente indisponível!")
            });

        }



    });