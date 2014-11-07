/////////////// CALENDAR EVENTS ////////////////////////////
function eventController($scope, $http, $routeParams) { //routeParams gives us access to project ID
    $scope.projectid = $routeParams.id; // why scope and var project?

    var projectId = $routeParams.id;
    var eventId = $routeParams.whatever;

    $http.get('/proxy/projects/' + projectId + '/calendar_events/' + eventId + '.json').
        success(function (eventResponse) {
            $scope.event = eventResponse;
            $scope.eventSummary = $scope.event.summary;
            $scope.eventDescription = $scope.event.description;
            $scope.eventStarts = $scope.event.starts_at;
            console.log(eventResponse);
        }).
        error(function (eventResponse) {
            console.log("didn't work");
    });

    $scope.editEvent = function () {
        $http.put('proxy/projects/' + projectId + 'calendar_events/' + eventId + '.json',
            {
                "summary": $scope.eventSummary,
                "description": $scope.eventDescription,
                "all_day": true,
                "starts_at": $scope.eventStarts
            }).
            success(function (data) {
                console.log(data);
                $scope.event = data;
            }).
            error(function (data) {
                console.log("didn't work");
            });
    };

    $scope.deleteEvent = function () {
        $http.delete('proxy/projects/' + projectId + '/calendar_events/' + eventId + '.json').
            success(function (data) {
                $scope.project = data;
                console.log('deleted')
            }).
            error(function (error) {
                    console.log(error)
            });
    };

//   $scope.newEvent = function() {
//       console.log('click');
//       $http.post('proxy/projects' + projectId + '/calendar_events/' + eventId + '.json',
//       {
//           'name': $scope.eventDescription,
//           'description': $scope.eventSummary,
//           'starts': $scope.eventStarts
//       }).
//       success(function (newEvent) {
//           console.log('new event');
//           $scope.projects.push(newEvent);
//           $scope.eventDescription = '';
//           $scope.eventSummary = '';
//           $scope.eventStarts = '';
//       }).
//       error(function (error) {
//           console.log(error)
//
//       });
//   };
}

