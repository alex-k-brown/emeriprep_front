'use strict';

angular.module('myApp.who-what', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/who-what', {
            templateUrl: 'who-what/who-what.html',
            controller: 'WhoWhatCtrl'
        });
    }])

    .controller('WhoWhatCtrl', ['$scope', function ($scope) {

        $scope.oneAtATime = true;

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

    }]);