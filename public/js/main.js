
angular.module('ImoveisNR' , ['minhasDiretivas' , 'ngAnimate' , 'ngRoute' , 'ngResource' , 'meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5mode(true);

        $routeProvider.when('/fotos' , {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId' , {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({redirecTo: '/fotos'});
    });

    