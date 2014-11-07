baseclone.directive('button', function() {
    return {
        restrict: 'E',
        compile: function(element, attributes) {
            element.addClass('btn');
            if (attributes.type == 'submit') {
                element.addClass('btn-primary');
            }
            if (attributes.type == 'delete') {
                element.addClass('btn-danger')
            }
            if (attributes.size) {
                element.addClass('btn-' + attributes.size);
            }
        }
    }
});