'use strict';
app.controller('datePickerController', ["$scope", function ($scope) {

    $scope.formatDate = function (theDate) {
        var zeroPad = function (str) {
            return ('0' + str).slice(-2);
        };

        var day = zeroPad(theDate.getDate());
        var month = zeroPad(theDate.getMonth());
        var year = theDate.getFullYear();

        return [month, day, year].join('/');
    };

    $scope.today = new Date();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.format = "dd/MM/yyyy";
    
    $scope.Options = {
        startingDay: 1
    };
}])