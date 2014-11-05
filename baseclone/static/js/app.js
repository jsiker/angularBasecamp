
var baseclone = angular.module('baseclone', ['ngRoute']);
// can reference whole module as baseclone
baseclone.config(['$routeProvider', function($routeProvider) {
    $routeProvider.                   // $routeProvider needs ngRoute injected
    when('/home', {
            templateUrl: '/static/js/views/home.html',
            controller: homeController
        }).
    when('/projects/:id', {
            templateUrl: '/static/js/views/project.html',
            controller: projectController
        }).
    when('projects/:id/calendar_events/:whatever', {
            templateUrl: '/static/js/views/event.html',
            controller: eventController
        }).
        otherwise({redirectTo: '/'});
}]);