app.controller('emailConfirmationController', ['$scope', '$state', '$stateParams', 'modalService',
    function ($scope, $state, $stateParams, modalService) {
        var emailConfirmation = this;

        emailConfirmation.doConfirm = function () {
            console.log("passou");
        };
    }
]);