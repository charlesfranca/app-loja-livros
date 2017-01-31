angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('LivroService', ['$http', function($http) {
    var svc = {};
    var livros = [{
        title: "Livro 1",
        imagem: "img/nemtaoprimos-livro.png",
        precode: "90,00",
        precopor: "50,00",
        autor: "Charles França"
    }, {
        title: "Livro 2",
        imagem: "img/nemtaoprimos-livro.png",
        precode: "90,00",
        precopor: "50,00",
        autor: "Charles França"
    }, {
        title: "Livro 3",
        imagem: "img/nemtaoprimos-livro.png",
        precode: "90,00",
        precopor: "50,00",
        autor: "Charles França"
    }];

    svc.getLivros = function(callback) {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://localhost:3000/livros'
        }).then(function successCallback(resposta) {
            callback(resposta.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    return svc;
}]);


// {
//     config: {}, // Configurações utilizadas para fazer a solicitação
//     data: {}, // Dados solicitados para a API
//     headers: {} // Informações do header da solicitação
// }