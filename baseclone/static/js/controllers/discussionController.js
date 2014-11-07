function discussionController($scope, $routeParams, $http, Message) {
    var projectId = $routeParams.id;
    $http.get('proxy/projects/' + projectId + '/topics.json').
        success(function (data) {
            $scope.topicable = data;
        }).error(function(data) {
            console.log('nope');
        });

//    var projectId = $routeParams.projectId;
//    var discussionId = $routeParams.discussionId;
//    $scope.projId = projectId;
//
//    $scope.discussion = Message.get({projectId: projectId, discussionId: discussionId});
//    $scope.deleteMessage = function (projID) {
//        var del = projID;
//        Message.delete({projectId: del, discussionId: discussionId});
//    };
//    $scope.editDiscussion = function(projID) {
//        var edit = projID;
//        var data = {
//            'subject': $scope.editName,
//            'content': $scope.editDescription
//        };
//        Message.update({projectId: projectId, discussionId: discussionId}, data)
//    }
}
