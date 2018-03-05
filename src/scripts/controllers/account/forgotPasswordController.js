app.controller('forgotPasswordController', ['$scope', '$state', 'modalService',
    function ($scope, $state, modalService) {
        var forgotPassword = this;

        forgotPassword.doSend = function (form) {
            if (form.$valid) {
                console.log("passou");
            }
        }
    }
]);