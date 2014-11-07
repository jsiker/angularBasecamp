function projectController($scope, $http, $routeParams, $location) { //routeParams gives us access to project ID

    var projectId = $routeParams.id;

    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            $scope.project = data;
        }).
        error(function(data) {
            console.log("didn't work");
        });

    $http.get('/proxy/projects/' + projectId + '/topics.json').
    success(function(data){
        $scope.topics = data;
            console.log(data)
    }).
        error(function(data) {
        console.log("didn't work");
    });

    $http.get('/proxy/projects/' + projectId + '/calendar_events.json').
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
        console.log($scope.calendar);// push data into empty calendar array; WON'T PUSH!!!!!!!
        $http.post('proxy/projects/' + projectId + '/calendar_events.json',
        {
           "summary": $scope.eventSummary,
           "description": $scope.eventDescription,
           "all_day": true,
           "starts_at": $scope.eventStarts
        }).
        success(function (xxx) {
            console.log('new event');
            $scope.calendar.push(xxx);
            console.log($scope.calendar);// push data into empty calendar array; WON'T PUSH!!!!!!!
//           $scope.eventDescription = '';
//           $scope.eventSummary = '';
//           $scope.eventStarts = '';
        }).
        error(function (data) {
            console.log('didn\'t work')
        });
   };
    $scope.hasAttachment = function(filterData){
     // If the checkbox is checked (when checked, it's value is true)
     if ($scope.attachmentBoolean) {
        // Only return topics that have attachments
        return filterData.attachments > 0;
     // else return true for all topics
        } else {
        return true
         }
     };
    $scope.linkToSearch = function() {
    var link = $location.absUrl() + '?' + $scope.searchText;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", link);
    };
    projects
    //////////////// Peter's example //////////////////
//        $scope.newCalendar = function() {
//        var data = {
//            "name": $scope.calendarName
//        };
//        $http.post('/proxy/calendars.json', data).
//            success(function(){
//                console.log("worked");
//            }).error(function(error){
//                console.log('fail');
//            })
//
//    };
//    $scope.projects = ProjectFactory.projectList;
//    if (ProjectFactory.projectList.length > 0) {
//    $scope.projects = ProjectFactory.projectList;
//}
//    else {
//    $http.get('/proxy/projects.json')
//        .success(function(response) {
//            console.log(response);
//            $scope.projects = response;
//            ProjectFactory.projectList = $scope.projects;
//    }).error(function(error) {
//            console.log(error);
//        });
//}
//    $scope.projects = ProjectFactory.deleteProject(); //Simply call function?
//    $scope.projects = ProjectFactory.editProject(); //Simply call function?
}