app.factory('projects', function($http, $routeParams){
   var promise = null;
    var projectId = $routeParams.id;

    return function() {
        if (promise) {
            // if we've already asked for this, return as already existing
            return promise;
        } else {
            promise = $http.get('/proxy/projects/' + projectId + '.json');
            console.log(promise);
            return promise
        }
    };
});