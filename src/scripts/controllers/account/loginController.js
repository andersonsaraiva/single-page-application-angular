app.controller('loginController', ['$scope', '$state', '$stateParams', 'modalService', '$window',
    function ($scope, $state, $stateParams, modalService, $window) {
        var login = this;

        login.loginData = {};

        login.doLogin = function (form) {
            if (form.$valid) {
                console.log("passou");
            }
        };
    }
]);