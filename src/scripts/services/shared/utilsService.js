app.service('utilsService', ['$http', 'authSettings', function ($http, authSettings) {

    var serviceBase = authSettings.apiServiceBaseUri;

    this.getCarousel = function () {
        return $http.get(serviceBase + 'slides.json').then(function (results) {
            return results;
        });
    };

    this.getNews = function () {
        return $http.get(serviceBase + 'noticias.json').then(function (results) {
            return results;
        });
    };

    this.getBirthdays = function () {
        return $http.get(serviceBase + 'aniversariantes.json').then(function (results) {
            return results;
        });
    };
}]);