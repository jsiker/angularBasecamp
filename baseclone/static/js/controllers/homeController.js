function homeController($scope, $http, ProjectFactory){
    $http.get('/proxy/projects.json').
    success(function(projectsResponse) {
        $scope.projects = projectsResponse;
    }).
    error(function(errorResponse) {
        console.log(errorResponse);
    });
    $scope.newProject = function() {
        $http.post('proxy/projects.json',
            {
                'name': $scope.projectName,
                'description': $scope.projectDescription
            }).
            success(function (newProject) {
                $scope.projects.push(newProject);
                $scope.projectName = '';
                $scope.projectDescription = '';
            }).
            error(function (error) {
                console.log(error)

        });
    };
    ProjectFactory.getProjects(function(response) {
        $scope.projects = response;
        ProjectFactory.projectList = $scope.projects;
    });

    ProjectFactory.deleteProject(function(response) {
        $scope.projects = response;
        ProjectFactory.projectList = $scope.projects;
    });



//    $scope.projects = ProjectFactory.deleteProject(); //Simply call function?
//    $scope.projects = ProjectFactory.editProject(); //Simply call function?
}