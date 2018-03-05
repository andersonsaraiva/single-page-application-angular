app.controller('recoverController', ['$scope', '$state', '$stateParams', 'modalService',
    function ($scope, $state, $stateParams, modalService) {
        var recover = this;

        recover.request = {};

        recover.changePassword = function (form) {
            if (form.$valid) {
                console.log("passou");
            }
        };

        recover.validatePassword = function (value, modelInput) {
            return value === modelInput;
        };
    }
]);