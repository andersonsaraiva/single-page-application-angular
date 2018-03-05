app.directive('pageTitle', ['$rootScope', '$timeout','$state',
    function ($rootScope, $timeout,  $state) {
        return {
            link: function (scope, element) {
                var listener = function (event, toState) {
                    var title = 'Default Title';

                    if (toState && toState.title) {
                        title = toState.title;
                    }
                    
                    element.text(title);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
]);