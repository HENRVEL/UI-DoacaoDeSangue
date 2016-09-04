angular.module("doacao-de-sangue").config(function($routeProvider){
     $routeProvider.when("/home",{
         templateUrl:"views/home.html"
     });

     $routeProvider.when("/defaultDoador", {
         templateUrl:"views/doador/default.html",
         controller: "doadorController"
     });

      $routeProvider.when("/cadastroDoador", {
         templateUrl:"views/doador/cadastro.html",
         controller:"doadorController"
      });

      $routeProvider.when("/cadastroLogin", {
          templateUrl: "views/doador/cadastroLogin.html",
          controller: "doadorController"
      });

      $routeProvider.when("/novoAgendamento", {
          templateUrl: "views/agendamento/novoAgendamento.html",
          controller: "agendamentoController"
      });
      
      $routeProvider.when("/login", {
          templateUrl: "views/login/login.html",
          controller: "loginController"
      });

     //Rota Padrão ==============================
     $routeProvider.otherwise({redirectTo:"/home"});
});