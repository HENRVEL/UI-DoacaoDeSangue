angular.module("doacao-de-sangue").directive("menu", function () {
    return {
        templateUrl:"views/directives/menu.html",
        replace: true,
        scope:{
            ativo: "@"
        }
       
    };
});
