// DEFININDO A FOTO PARA A VIEW.
angular.module('ImoveisNR').controller('FotosController', function($scope,$http,recursoFoto) {

    // SCOPE SERVE PARA O CONTROLLER CONSEGUIR DISPONIBILIZAR DADOS PARA A VIEW.
    $scope.fotos = []; 
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
        $scope.foto = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {

        recursoFoto.delete({fotoId: foto_id}, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = ' Foto ' + foto.titulo + ' Removida com Sucesso ! ';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = ' Não foi Possível apagar a foto ' + foto.titulo;
        });
    };
});