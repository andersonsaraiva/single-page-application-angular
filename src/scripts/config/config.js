app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}]);

app.config(["$breadcrumbProvider", function ($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
        template: '<ul class="breadcrumb">' +
            '   <li>' +
            '     <i class="fa fa-home"></i>' +
            '     <a ui-sref="app.account.home">Home</a>' +
            '   </li>' +
            '   <li ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract">' +
            '     <a ng-switch-when="false" ui-sref="{{step.name}}" ui-sref-opts="{reload: step.ncyBreadcrumb.reload }">' +
            '       {{step.ncyBreadcrumbLabel}}' +
            '     </a>' +
            '     <span ng-switch-when="true">' +
            '       {{step.ncyBreadcrumbLabel}}' +
            '     </span>' +
            '   </li>' +
            ' </ul>',
    });
}]);

app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.spinnerTemplate = "<div class=\"showbox\"><div class=\"loader\"><svg class=\"loader-circular\" viewBox=\"25 25 50 50\"><circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/></svg></div></div>";
}]);

app.constant('authSettings', {
    apiServiceBaseUri: 'http://localhost:9002/api/'
});