baseclone.filter('dateTypeFilter', function() {
    return function(topicList, dateType) {
        var filtered = [];
        angular.forEach(topicList, function(topic){
            if (topic.created_at.split('T')[0] === dateType) { // topicable == basecamp sub-object
                filtered.push(topic);
            }
        });
        return filtered;
    };
});