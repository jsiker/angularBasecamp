baseclone.factory('Message', function($resource) {
    return $resource('/proxy/projects/:projectId/messages/:discussionId.json', {
            // Parameter defaults
        }, {
            // Actions
        }
    );
});