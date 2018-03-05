app.controller('registerOrganizationChartController', ['$scope', '$state', '$stateParams', 'modalService', 'messageService', 'Upload', '$timeout',
    function ($scope, $state, $stateParams, modalService, messageService, Upload, $timeout) {
        var registerOrganizationChart = this;
        registerOrganizationChart.organizationChartModel = {};

        registerOrganizationChart.save = function (form) {
            if (form.$valid) {

                messageService.confirm("Você realmente deseja atualizar o Organograma?", function (result) {
                    if (result) {

                        registerOrganizationChart.organizationChartModel = {};

                        $timeout(function () {
                            messageService.toasterEdited();
                        }, 100);

                        $state.go("app.account.registerOrganizationChart");
                    }
                });
            }
        };
    }
]);