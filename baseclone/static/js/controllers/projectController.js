function projectController($scope, $http, $routeParams) { //routeParams gives us access to project ID

    $scope.calendar = []; // need an empty calendar object to make events

    var projectId = $routeParams.id;

    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            $scope.project = data;
        }).
        error(function(data) {
            console.log("didn't work");
        });

    $http.get('/proxy/projects/' + projectId + '.json').
    success(function(data){
        $scope.topics = data;
    }).
        error(function(data) {
        console.log("didn't work");
    });

    $http.get('/proxy/projects/' + projectId + '.json').
    success(function(data){
        $scope.calendar = data;
    }).
        error(function(data) {
        console.log("didn't work");
    });

    var projectId = $routeParams.id;    // adding second projectid var

    $scope.editProject = function() {
        $http.put('proxy/projects/' + projectId + '.json',
            {
                'name': $scope.projectName,
                'description': $scope.projectDescription
            }).
            success(function (data) {
                $scope.project = data;
                console.log(data)
            }).
            error(function (error) {
                console.log(error)

            });
    };

    $scope.deleteProject = function() {
        $http.delete('proxy/projects/' + projectId + '.json',
        {
            'name': $scope.projectName,
            'description': $scope.projectDescription
        }).
        success(function (data) {
            $scope.project = data;
            console.log(data)
        }).
        error(function (error) {
            console.log(error)

        });
    };

    $scope.newEvent = function() { // put new event func in project controller
        console.log('click');
        $http.post('proxy/projects/' + projectId + '/calendar_events/.json',
        {
           'summary': $scope.eventSummary,
           'description': $scope.eventDescription,
           'starts': $scope.eventStarts,
           'all_day': true
        }).
        success(function (data) {
            console.log('new event');
            $scope.calendar.push(data); // push data into empty calendar array; WON'T PUSH!!!!!!!
//           $scope.eventDescription = '';
//           $scope.eventSummary = '';
//           $scope.eventStarts = '';
        }).
        error(function (error) {
            console.log(error)
        });
   };
}