baseclone.filter('topicTypeFilter', function() {
    return function(topicList, topicType) {
        var filtered = [];
        angular.forEach(topicList, function(topic){
            if (topic.topicable.type == topicType) { // topicable == basecamp sub-object
                filtered.push(topic);
            }
        });
        return filtered;
    };
});