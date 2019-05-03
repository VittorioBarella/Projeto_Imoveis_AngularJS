angular.module('projeto_imoveis_angularjs', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {
        // CRIAR NOVAS ROTAS AQUI.
		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', { // QUANDO A URL FOR /FOTOS, DIRECIONA PARA PRINCIPAL.HTML.
			templateUrl: 'partials/principal.html', // VIEW PARCIAL QUE SERÁ CARREGADA.
			controller: 'FotosController' // CONTROLADOR QUE SERÁ ASSOCIADO A ESSA PARCIAL.
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
        });

        $routeProvider.when('/fotos/casas', {
            templateUrl: 'partials/casas.html',
            controller: 'CasasController'
        });

        $routeProvider.when('/fotos/apartamentos', {
            templateUrl: 'partials/apartamentos.html',
            controller: 'ApartamentosController'
        });

        $routeProvider.when('/fotos/studios', {
            templateUrl: 'partials/studios.html',
            controller: 'StudiosController'
        });

        $routeProvider.when('/fotos/comercial', {
            templateUrl: 'partials/comercial.html',
            controller: 'ComercialController'
        })

		$routeProvider.otherwise({redirectTo: '/fotos'});

	});