app.controller('homeAccountController', ['$scope', '$state', 'messageService', function ($scope, $state, messageService){
    var homeAccount = this;

    homeAccount.usuarioModel = {};
    homeAccount.changingPassword = false;
    homeAccount.changePasswordModel = {};

    homeAccount.changePassword = function () {
        homeAccount.changingPassword = true;
        homeAccount.changePasswordModel = {};
    }

    homeAccount.cancelChangePassword = function () {
        homeAccount.changingPassword = false;
        homeAccount.changePasswordModel = {};
    }

    homeAccount.saveChanges = function (form) {
        if (form.$valid) {
            console.log("Passou");
        }
    }

    homeAccount.validatePassword = function (value, modelInput) {
        return value === modelInput;
    };
}]);