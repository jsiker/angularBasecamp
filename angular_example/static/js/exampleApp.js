var exampleApp = angular.module('exampleApp',['ngRoute']);

exampleApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/example_view.html', controller: exampleController}).
        when('/dynamic', {templateUrl: '/static/js/views/dynamic_view.html', controller: dynamicController}).
        otherwise({redirectTo: '/'});
}]);