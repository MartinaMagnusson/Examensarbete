/// <reference path="C:\Users\Martina\Documents\Skola\Examensarbete\ExamensarbeteAngularJS\ExamensarbeteAngularJS\Scripts/angular.min.js" />

var app = angular.module('shoes', ['shoeFilter']);

app.controller('ShoesController', ['$scope', '$http', function ($scope, $http) {
    $scope.shoes = [];

    $http.get('../json/shoes.json')
        .then(function successCallback(response) {
            $scope.shoes = response.data.shoes;
        },
        function errorCallback(response) {
            $scope.error = response.data;
        });

    $scope.search = {};

    $scope.getColor = function () {
        $scope.color = ['-- Välj färg --'];
        for (var i = 0; i < $scope.shoes.length; i++) {
            for (var x = 0; x < $scope.shoes[i].colors.length; x++) {
                if ($scope.color.indexOf($scope.shoes[i].colors[x].color) === -1)
                    $scope.color.push($scope.shoes[i].colors[x].color);
            }
        }
        return $scope.color;
    };
}]);

app.directive('shoes', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/shoes.html'
    }
});