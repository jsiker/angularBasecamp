baseclone.factory('ProjectFactory', function($http) {
    return {
        projectList: [],
        getProjects: function(callback) {
            $http.get('/proxy/projects.json')
                .success(function(response) {
                    callback(response);

            }).error(function(error) {
                    console.log(error);
                });
        },

      deleteProject: function(callback) {
        $http.delete('proxy/projects/json')
            .success(function (response) {
                callback(response);
                console.log(response)
            }).
            error(function (error) {
                console.log(error)
            })
        },
      editProject: function(callback) {
        $http.put('proxy/projects/json')
            .success(function (response) {
                callback(response);
                console.log(response)
            }).
            error(function (error) {
                console.log(error)
            })
        }
    };
});