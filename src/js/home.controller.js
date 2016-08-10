angular.module('TodoApp').controller('HomeCtrl', function($scope, $filter) {
    $scope.list = [];
    $scope.reverse = false;

    // priorities and their associated datda
    $scope.priorities = {
        "High": {
            class: "high",
            num: 1
        },
        "Medium": {
            class: "medium",
            num: 2
        },
        "Low": {
            class: "low",
            num: 3
        }
    };
    // defaults
    $scope.item = {};
    $scope.item.priority = $scope.priorities.High;

    // for the drag and drop list
    $scope.selected = null;

    // add todo item to the todo list
    // then reset the input fields
    $scope.addTodo = function() {
        if($scope.item.text.length > 0) {
            $scope.list.unshift($scope.item);
            // default 
            $scope.item = {};
            $scope.item.priority = $scope.priorities.High;
        }
    };

    // sort the todo list by the given expression
    $scope.sortBy = function(expression, reverse) {
        // sort first by the expression, then alphabetically
        // this ensures consistent results
        var expressions = [expression, 'text'];
        $scope.list = $filter('orderBy')($scope.list, expressions, reverse);
    };

});