app.service('userService', ['$http', 'authSettings', function ($http, authSettings) {

    var serviceBase = authSettings.apiServiceBaseUri;

    this.getUsers = function () {
        return $http.get(serviceBase + 'users.json').then(function (results) {
            return results;
        });
    };
}]);