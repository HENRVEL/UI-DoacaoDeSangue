angular.module("doacao-de-sangue").directive("cabecalho", function () {
    return {
        templateUrl:"views/directives/cabecalho.html",
        replace: true,
        scope:{
            titulo: "@"
        }
       
    };
});